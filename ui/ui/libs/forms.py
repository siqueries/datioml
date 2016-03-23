__author__ = 'Ebot Tabi'
from wtforms import TextField, BooleanField, TextAreaField
from wtforms.validators import Required, EqualTo, Email, DataRequired
from wtforms.fields import PasswordField

from flask_wtf import Form, widgets


class RegisterForm(Form):
    first_name = TextField('Names', [Required(message='Your first name are required')])
    last_name = TextField('Names', [Required(message='Your last name are required')])
    password = PasswordField('Password', validators=[DataRequired(message='Your password required')])
    email = TextField('Email address', [Required(message='Your email address is required and must be valid'), Email()])


class LoginForm(Form):
    email = TextField('Email', validators=[DataRequired(message='Your email address is required')])
    password = PasswordField('Password', validators=[DataRequired(message='Your password required')])
    remember_me = BooleanField('Remember me', default=False)


class ResetForm(Form):
    password = PasswordField('Password', validators=[DataRequired(message='Your password required'), EqualTo('confirm_password', message='Password & Confirm Password must match')])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(message='Your confirm password required')])

class ForgotForm(Form):
    email = TextField('Email', validators=[DataRequired(message='Your email address is required')])


class PasswordForm(Form):
    company = TextField('Company', validators=[DataRequired(message='Your company is required')])
    password = PasswordField('Password', validators=[DataRequired(message='Your password required')])


class MetricForm(Form):
    name = TextField('Name', validators=[DataRequired(message='Your name is required')])
    description = TextAreaField('description', validators=[DataRequired(message='Your description is required')])
    query = TextAreaField('Query', validators=[DataRequired(message='Your query is required')])


class DashboardAndProjectForm(Form):
    name = TextField('Name', validators=[DataRequired(message='Your name is required')])
    description = TextAreaField('description', validators=[DataRequired(message='Your description is required')])


class CommentForm(Form):
    body = TextAreaField('Comments:', validators=[DataRequired()])


class ProjectForm(Form):
    name = TextField('Project:', validators=[DataRequired(message='Project name is required')])


class DataSourceForm(Form):
    host = TextField('Host', validators=[DataRequired(message='Your hostname or IP is required')])
    dbname = TextField('Dbname', validators=[DataRequired(message='Your database name is required')])
    user = TextField('user', validators=[DataRequired(message='Your database username is required')])
    passd = TextField('passd')
    port = TextField('portt', validators=[DataRequired(message='Your database port is required')])