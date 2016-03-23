import sys as s

s.dont_write_bytecode = True
import urllib
import os
from flask import Flask, render_template, send_from_directory, url_for, session
from tornado.options import define, options
from ui.libs.libsmq import JSONGearmanClient
from flask.ext.assets import Environment, Bundle
from flask.ext.bcrypt import Bcrypt
from flask.ext.mongoengine import MongoEngine, MongoEngineSessionInterface
from flask.ext.login import LoginManager
from flask_wtf.csrf import CsrfProtect
from flask.ext.cache import Cache
# from flask.ext.sse import sse, send_event
from bson import ObjectId
import memcache

gm_client = JSONGearmanClient(['localhost:4730'])

stripeKey = "sk_test_NdDhdXV1gQ3GBljSylRKkXXx"
zuriel = 'http://localhost:2020'
backend_url = 'http://localhost:12000'
finagle_api = 'http://localhost:8080/api/v1'

app = Flask(__name__)

cache = Cache(app, config={'CACHE_TYPE': 'memcached'})

csrf = CsrfProtect()

csrf.init_app(app)


app.debug = True
app.config["MONGODB_SETTINGS"] = {'DB': "datio-science"}
app.config["SECRET_KEY"] = "t/eSb1zxF6fK2B/JNc0X2w=="
app.config['UPLOAD_FOLDER'] = 'csv_data/'
app.config['UPLOAD_DATASETS'] = '/srv/managed_datasets/'
app.config['ALLOWED_NUMBERS_EXTENSIONS'] = set(['csv'])

db = MongoEngine(app)
app.session_interface = MongoEngineSessionInterface(db)
bcrypt = Bcrypt(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = urllib.quote("/s/login")  # urllib2.quote('account/login'.encode('utf8'), "")

from ui.handlers.models.user import *

from ui.handlers.controllers.home import *
from ui.handlers.controllers.session import *
from ui.handlers.controllers.project import *




@login_manager.user_loader
def load_user(user_id):
    user = User()
    return user.get_by_id(user_id)


    
