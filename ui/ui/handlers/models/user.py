import sys
sys.dont_write_bytecode = True
from ui import bcrypt
from ui import db
import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask.ext.login import (LoginManager, current_user, login_required,
                             login_user, logout_user, UserMixin, AnonymousUserMixin,
                             confirm_login, fresh_login_required)


class Invites(db.Document):
    email = db.StringField(max_length=255, required=True)
    created_by = db.StringField(max_length=255, required=True)
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    active = db.BooleanField(default=False)


class Billing(db.Document):
    user_id = db.StringField(max_length=255, required=True)
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    amount = db.StringField()
    plan = db.StringField(max_length=255, required=True)
    contractType = db.StringField(max_length=255, required=True)
    chargeId = db.StringField(max_length=255, required=True)


class Organization(db.Document):
    user_id = db.StringField(max_length=255, required=True)
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    company = db.StringField(max_length=255, required=False)
    mobile = db.StringField(max_length=255, required=False)
    plan = db.StringField(max_length=255, required=False, default="enterprise")
    numberOfUsers = db.IntField(required=False)
    contractType = db.StringField(max_length=255, required=False)
    stripeToken = db.StringField(max_length=255, required=False, default="")
    active = db.BooleanField(default=False)
    trial = db.BooleanField(default=True)
    days = db.IntField(default=14)
    valid_subscription = db.BooleanField(default=False)
    start = db.DateTimeField(required=False)
    expires = db.DateTimeField(required=False)
    card_holder = db.StringField(max_length=255, required=False, default="")
    card_number = db.StringField(max_length=255, required=False, default="")
    cvc = db.StringField(max_length=255, required=False, default="")
    card_month = db.StringField(max_length=255, required=False, default="")
    card_year = db.StringField(max_length=255, required=False, default="")


class Org:
    def get_by_id(self, id):
        """
        method helps to add js variables on dashboard_layout.html
        """
        try:
            org = Organization.objects.get(user_id=id)
            if org:
                return org
            else:
                return None
        except Exception, e:
            return None


class Users(db.Document):
    created_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    updated_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    login_at = db.DateTimeField(default=datetime.datetime.now, required=True)
    email = db.StringField(max_length=255, required=True)
    password = db.StringField(max_length=255, required=False)
    token = db.StringField(max_length=255, required=False, default="")
    first_name = db.StringField(max_length=255, required=False)
    last_name = db.StringField(max_length=255, required=False)
    belongs_to = db.StringField(max_length=255, required=False)
    role = db.StringField(max_length=255, required=False, default="admin")
    owner = db.BooleanField(default=False)
    active = db.BooleanField(default=False)

    def check_password(self, provided_pass):
        return bcrypt.check_password_hash(self.password, provided_pass)

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return unicode(self.id)


class User(UserMixin):
    def __init__(self, created_at=None, updated_at=None, login_at=None,
                 email=None, password=None, token=None, first_name=None, last_name=None, belongs_to=None,
                 role=None, owner=False, active=False):
        self.created_at = created_at
        self.updated_at = updated_at
        self.login_at = login_at
        self.email = email
        self.password = password
        self.token = token
        self.first_name = first_name
        self.last_name = last_name
        self.belongs_to = belongs_to
        self.role = role
        self.owner = owner
        self.active = active
        self.id = None

    def save(self):
        new_user = Users(created_at=self.created_at, updated_at=self.updated_at, login_at=self.login_at,
                         email=self.email, password=self.password, token=self.token, first_name=self.first_name,
                         last_name=self.last_name, belongs_to=self.belongs_to, role=self.role, owner=self.owner,
                         active=self.active)
        new_user.save()
        self.id = str(new_user.id)
        return self.id

    def get_user_by_email(self, email):
        try:
            db_user = Users.objects.get(email=email)
            if db_user:
                return db_user
            else:
                return None
        except Exception, e:
            return None

    def get_user_by_email_w_password(self, email):
        try:
            db_user = Users.objects.get(email=email)
            if db_user:
                self.email = db_user.email
                self.active = db_user.active
                self.password = db_user.password
                self.id = db_user.id
                return self
            else:
                return None
        except:
            print "there was an error"
            return None

    def get_mongo_doc(self):
        if self.id:
            return Users.objects.with_id(self.id)
        else:
            return None

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def get_by_id(self, id):
        """
        method helps to add js variables on dashboard_layout.html
        """
        try:
            dbUser = Users.objects.with_id(id)
            if dbUser:
                return dbUser
            else:
                return None
        except Exception, e:
            return None


class Anonymous(AnonymousUserMixin):
    name = u"Anonymous"
