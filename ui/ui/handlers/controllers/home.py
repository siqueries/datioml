# -*- coding: utf-8 -*-
import sys
sys.dont_write_bytecode = True
from ui import app
import datetime
import json
from flask import flash, render_template, redirect, request, url_for, g, session, jsonify, Response
from flask.ext.login import current_user, login_user, login_required
import requests as res

@app.route('/')
@login_required
def home():
    return render_template("home/index.html", title="Welcome")


@app.route('/projects')
@login_required
def projects():
    return render_template("home/index.html", title="Welcome")


@app.route('/projects/add')
@login_required
def add_project():
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>')
@login_required
def gt_project(id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis')
@login_required
def gt_analysis(id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/datasets')
@login_required
def gt_datasets(id):
    return render_template("home/index.html", title="Welcome")

@app.route('/project/<id>/datasets/<dataset_id>/explore')
@login_required
def gt_dataset(id, dataset_id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/datasets/new')
@login_required
def gt_new_dataset(id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/datasets/new/upload')
@login_required
def gt_csv_upload(id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis/new')
@login_required
def new_analysis(id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis/<analysis_id>/models')
@login_required
def models(id, analysis_id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis/<analysis_id>/models/new')
@login_required
def new_model(id, analysis_id):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis/<analysis_id>/models/new/algorithms/<q>', methods=['GET'])
@login_required
def new_model_algorithms(id, analysis_id, q):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis/<analysis_id>/models/new/parameters/<q>', methods=['GET'])
@login_required
def new_model_parameters(id, analysis_id, q):
    return render_template("home/index.html", title="Welcome")


@app.route('/project/<id>/analysis/<analysis_id>/models/new/build_model/<q>', methods=['GET'])
@login_required
def new_model_build(id, analysis_id, q):
    return render_template("home/index.html", title="Welcome")






