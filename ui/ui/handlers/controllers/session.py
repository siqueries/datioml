# -*- coding: utf-8 -*-
import sys
sys.dont_write_bytecode = True
import datetime
import json
from flask import flash, render_template, redirect, request, url_for
from flask.ext.login import current_user, login_user, login_required, logout_user
from ui import app, bcrypt, cache, gm_client
from ui.handlers.models.user import User, Users, Organization
from ui import login_manager
from ui.libs.libsmq import get_activation_hash, encrypt_val, decrypt_val
from ui.libs.forms import RegisterForm, LoginForm, PasswordForm, ForgotForm, ResetForm


@app.route('/s/login', methods=["GET", "POST"])
def login():
    if current_user.is_authenticated():
        return redirect(url_for('home'))
    form = LoginForm(request.form)
    if request.method == "POST":
        if form.validate():
            userobj = User()
            user = userobj.get_user_by_email_w_password(form.email.data)
            if user is not None:
                if user.active:
                    if user and bcrypt.check_password_hash(user.password, form.password.data):
                        remember = request.form.get("remember_me")
                        if login_user(user, remember=remember):
                            next = request.form.get("next")
                            if next == "None":
                                return redirect(url_for('home'))
                            else:
                                return redirect(next)
                        else:
                            flash("unable to log you in")
                    else:
                        flash("Email/Password combination incorrect")
                        return redirect(url_for("login"))
                else:
                    flash("Your account is not active, please verify your acount using the link sent to you")
                    return redirect(url_for("login"))
            else:
                flash("Account doesn't exist")
                return redirect(url_for("login"))
    return render_template('session/login.html', title="Log in", form=form, next=request.args.get("next"))


@app.route("/s/demo", methods=["GET", "POST"])
def signup():
    if current_user.is_authenticated():
        return redirect(url_for('activity'))
    form = RegisterForm(request.form)
    if request.method == "POST":
        if form.validate():
            user = Users.objects(email=form.email.data)
            if user:
                flash('Email address is already taken', 'register')
            else:
                activation_hash = get_activation_hash()
                first_name = form.first_name.data
                last_name = form.last_name.data
                user = User(email=form.email.data,
                            token=activation_hash,
                            created_at=datetime.datetime.utcnow(),
                            updated_at=datetime.datetime.utcnow(),
                            role="superadmin", 
                            owner=True,
                            first_name=first_name,
                            last_name=last_name)
                flash('Thanks for requesting a demo. An email will be sent to you', 'register')
                user_id = user.save()
                organization = Organization(
                    user_id=user_id,
                    company=""
                )
                organization_id = organization.save()
                us_o = Users.objects(id=user_id).first()
                us_o.belongs_to = str(organization_id.id)
                us_o.save()
                queue_data = {
                    "email": form.email.data,
                    "token": activation_hash,
                    "name": "{0}".format(first_name+" "+last_name),
                    "content": render_template('emails/new.html', activation_hash=activation_hash,
                                               names="{0}".format(first_name+" "+last_name))
                }
                gm_client.submit_job("session.register", json.dumps(queue_data), background=True,
                                     wait_until_complete=False)
                return redirect(url_for("signup"))
    return render_template('session/register.html', title="Get your account now", form=form)


@app.route("/s/verify/i/<token>", methods=["GET", "POST"])
def verify(token):
    if current_user.is_authenticated():
        return redirect(url_for('activity'))
    activation_hash = token #request.args.get("t")
    user = Users.objects(token=activation_hash).first_or_404()
    # user.active = True
    # user.token = ""
    # user.save()
    form = PasswordForm(request.form)
    return render_template('session/verify.html', title="Complete sign up", form=form, u=user)


@app.route('/s/continue', methods=["POST"])
def complete():
    if current_user.is_authenticated():
        return redirect(url_for('activity'))
    form = PasswordForm(request.form)
    if request.method == "POST":
        if form.validate():
            password=bcrypt.generate_password_hash(form.password.data)
            usr = Users.objects(id=request.form.get("token")).first()

            start_date = datetime.datetime.utcnow()
            date_1 = datetime.datetime.strptime(str(start_date), "%Y-%m-%d %H:%M:%S.%f")
            end_date = date_1 + datetime.timedelta(days=14)

            org = Organization.objects(user_id=str(usr.id)).first()
            org.company = request.form.get("company")
            org.start = start_date
            org.expires = end_date
            org.numberOfUsers = 12
            org.save()

            usr.password = password
            usr.active = True
            usr.token = ""
            usr.save()

            user_obj = User()
            user = user_obj.get_user_by_email_w_password(usr.email)
            if user and bcrypt.check_password_hash(user.password, form.password.data) and user.active:
                if login_user(user):
                    next = request.args.get("next")
                    if next is None:
                        return redirect(url_for('home'))
                    else:
                        return redirect(next)
                else:
                    flash("unable to log you in")
            else:
                flash("Email/Password combination incorrect")
                return redirect(url_for("login"))
    return render_template('session/login.html', title="Sign In", form=form)


@app.route("/s/forgot", methods=["GET", "POST"])
def forgot():
    if current_user.is_authenticated():
        return redirect(url_for('activity'))
    form = ForgotForm(request.form)
    if request.method == "POST":
        if form.validate():
            user = Users.objects(email=form.email.data).first()
            if user:
                activation_hash = get_activation_hash()
                user.token = activation_hash
                user.save()
                queue_data = {
                    "email": form.email.data,
                    "token": activation_hash,
                    "name": "{0}".format(user.names),
                    "content": render_template('emails/forgot.html', activation_hash=activation_hash)
                }
                gm_client.submit_job("session.forgot", json.dumps(queue_data), background=True,
                                     wait_until_complete=False)
                flash('An Email has been sent to you with instructions', 'forgot')
            else:
                flash('Email address does not exist', 'forgot')

    return render_template('session/forgot.html', title="Forgot password ?", form=form)


@app.route("/s/reset/i/<token>", methods=["GET", "POST"])
def reset(token):
    if current_user.is_authenticated():
        return redirect(url_for('activity'))
    user = Users.objects(token=token).first_or_404()
    form = ResetForm(request.form)
    if request.method == "POST" and form.validate():
        user.token = ""
        user.password = bcrypt.generate_password_hash(form.password.data)
        user.save()
        if user.active:
            if login_user(user):
                return redirect(url_for('activity'))

    return render_template('session/reset.html', title="Get a new password", form=form, token=token)


@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('login'))










