# -*- coding: utf-8 -*-
import sys
sys.dont_write_bytecode = True
from ui import app, csrf
import datetime
import json
from flask import flash, render_template, redirect, request, url_for, g, session, jsonify, Response
from flask.ext.login import current_user, login_user, login_required
import requests as res
from werkzeug import secure_filename
import os
import time
import csv
import io
import base64
from ui.libs.httpclient import *


@csrf.exempt
@app.route('/api/projects', methods=["GET", "POST"])
@login_required
def get_projects():
	if request.method == "POST":
		project_id = api_create_project(str(current_user.id), request.json)["rowId"]
		return jsonify({"id": project_id})
	if request.method == "GET":
		return Response(response=json.dumps(api_get_projects(str(current_user.id))), status=200, mimetype="application/json")


@csrf.exempt
@app.route("/api/projects/<project_id>", methods=["GET", "POST"])
@login_required
def get_project(project_id):
	if request.method == "GET":
		project = api_get_project(str(current_user.id), project_id)
		return Response(response=json.dumps(project), status=200, mimetype="application/json")


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_NUMBERS_EXTENSIONS']


@csrf.exempt
@app.route("/api/projects/<project_id>/file/upload", methods=["GET", "POST"])
@login_required
def upload_file(project_id):
	if request.method == "POST":
		file = request.files['file']
		if file and allowed_file(file.filename):
			filename = str(int(time.time())) + "_" + secure_filename(file.filename)
			if not os.path.exists(app.config['UPLOAD_FOLDER']):
				os.makedirs(app.config['UPLOAD_FOLDER'])
			file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
			data = dict()
			data["name"] = request.form.get("name")
			data["description"] = request.form.get("description")
			data["dataFormat"] = request.form.get("dataformat")
			data["columnHeader"] = request.form.get("columnheader")
			data["fileName"] = filename
			data["dataType"] = "CSV"
			data["userId"] = str(current_user.id)
			data["projectId"] = project_id
			resp = api_create_dataset(data)
			return Response(response=json.dumps({"msg": "file uploaded"}), status=200, mimetype="application/json")


@app.route("/api/projects/<project_id>/datasets")
@login_required
def get_datasets(project_id):
	datasets = api_get_datasets(str(current_user.id), project_id)
	return Response(response=json.dumps(datasets), status=200, mimetype="application/json")

@app.route("/api/projects/<project_id>/datasets/<dataset_id>")
@login_required
def get_dataset(project_id, dataset_id):
	datasets = api_get_dataset(str(current_user.id), project_id, dataset_id)
	return Response(response=json.dumps(datasets), status=200, mimetype="application/json")


@app.route("/api/counter/data")
@login_required
def get_datasets_count():
	project_id = request.args.get('productId')
	datasets = api_get_datasets(str(current_user.id), project_id)
	return Response(response=json.dumps(len(datasets)), status=200, mimetype="application/json")

@app.route("/api/counter/analysis")
@login_required
def get_analysis_count():
	project_id = request.args.get('productId')
	datasets = api_get_analysis(str(current_user.id), project_id)
	return Response(response=json.dumps(len(datasets)), status=200, mimetype="application/json")


@csrf.exempt
@app.route('/api/projects/<project_id>/analysis/<analysis_id>')
@login_required
def get_single_analysis(project_id, analysis_id):
	analysis = api_get_single_analysis(str(current_user.id), analysis_id)
	return Response(response=json.dumps(analysis), status=200, mimetype="application/json")

@csrf.exempt
@app.route('/api/projects/<project_id>/analysis', methods=["GET", "POST"])
@login_required
def get_analysis(project_id):
	if request.method == "POST":
		analysis_id = api_create_analysis(str(current_user.id), request.json)["rowId"]
		return jsonify({"id": analysis_id})
	if request.method == "GET":
		user_id = str(current_user.id)
		analysis = api_get_analysis(user_id, project_id)
		return Response(response=json.dumps(analysis), status=200, mimetype="application/json")


@app.route("/api/projects/<project_id>/analysis/<analysis_id>/meta")
@login_required
def get_metadata(project_id, analysis_id):
	meta_data = api_get_metadata(str(current_user.id), analysis_id)
	return Response(response=json.dumps(meta_data), status=200, mimetype="application/json")


@csrf.exempt
@app.route('/api/projects/<project_id>/analysis/<analysis_id>/models', methods=["GET", "POST"])
@login_required
def get_models(project_id, analysis_id):
	if request.method == "POST":
		analysis_id = api_create_analysis(str(current_user.id), request.json)["rowId"]
		return jsonify({"id": analysis_id})
	if request.method == "GET":
		user_id = str(current_user.id)
		analysis = api_get_models(user_id, project_id, analysis_id)
		return Response(response=json.dumps(analysis), status=200, mimetype="application/json")


@csrf.exempt
@app.route('/api/projects/<project_id>/analysis/<analysis_id>/models/build', methods=["POST"])
@login_required
def build_models(project_id, analysis_id):
	if request.method == "POST":
		data = dict()
		data = request.json
		data["userId"] = str(current_user.id)
		data["projectId"] =  project_id
		data["analysisId"] = analysis_id
		data["modelName"] = data["model_name"]
		analysis_id = api_build_model(str(current_user.id), data)["rowId"]
		return Response(response=json.dumps(analysis_id), status=200, mimetype="application/json")










