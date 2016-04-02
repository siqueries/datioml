# -*- coding: utf-8 -*-
import sys
import requests as res
import json
from ui import finagle_api


def post_method(url, params):
	headers = {'Accept': 'application/json', "Content-Type": "application/json"}
	resp = res.post(url, data=json.dumps(params), headers=headers, verify=False)
	return json.loads(resp.text)


def api_create_project(user_id, content):
	url = "{api}/{path}".format(api=finagle_api, path="project/create")
	data = dict()
	data = content
	data["userId"] = user_id
	response = post_method(url, data)
	return response

def api_get_projects(user_id):
	url = "{api}/{path}".format(api=finagle_api, path="projects")
	data = dict()
	data["userId"] = user_id
	response = post_method(url, data)
	return response

def api_get_project(user_id, project_id):
	url = "{api}/{path}".format(api=finagle_api, path="project")
	data = dict()
	data["userId"] = user_id
	data["projectId"] = project_id
	response = post_method(url, data)
	return response

def api_create_dataset(data):
	url = "{api}/{path}".format(api=finagle_api, path="dataset/create")
	response = post_method(url, data)
	return response

def api_get_datasets(user_id, project_id):
	url = "{api}/{path}".format(api=finagle_api, path="datasets")
	data = dict()
	data["userId"] = user_id
	data["projectId"] = project_id
	response = post_method(url, data)
	return response

def api_get_dataset(user_id, project_id, dataset_id):
	url = "{api}/{path}".format(api=finagle_api, path="dataset")
	data = dict()
	data["userId"] = user_id
	data["projectId"] = project_id
	data["datasetId"] = dataset_id
	response = post_method(url, data)
	return response

def api_create_analysis(user_id, content):
	url = "{api}/{path}".format(api=finagle_api, path="analysis/create")
	data = dict()
	data = content
	data["userId"] = user_id
	response = post_method(url, data)
	return response

def api_get_analysis(user_id, project_id):
	url = "{api}/{path}".format(api=finagle_api, path="analysis")
	data = dict()
	data["userId"] = user_id
	data["projectId"] = project_id
	response = post_method(url, data)
	return response

def api_get_single_analysis(user_id, analysis_id):
	url = "{api}/{path}".format(api=finagle_api, path="analysis/single")
	data = dict()
	data["userId"] = user_id
	data["analysisId"] = analysis_id
	response = post_method(url, data)
	return response


def api_get_metadata(user_id, analysis_id):
	url = "{api}/{path}".format(api=finagle_api, path="datasets/metadata")
	data = dict()
	data["userId"] = user_id
	data["analysisId"] = analysis_id
	response = post_method(url, data)
	return response


def api_build_model(user_id, content):
	url = "{api}/{path}".format(api=finagle_api, path="analysis/models/build")
	response = post_method(url, content)
	return response


def api_get_models(user_id, project_id, analysis_id):
	url = "{api}/{path}".format(api=finagle_api, path="analysis")
	data = dict()
	data["userId"] = user_id
	data["projectId"] = project_id
	response = post_method(url, data)
	return response



