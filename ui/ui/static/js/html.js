(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['aggr'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div style=\"padding-left:8px;\"><i class=\"fa fa-cogs fa-2x\"></i></div>\n<div class=\"label\">Aggregation</div>";
  });
templates['algorithms'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                                <option value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" data-index=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                            ";
  return buffer;
  }

  buffer += "<style>\n.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n\n\n\n<div class=\"row\" id=\"algorithms\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div style=\"margin: 0 auto; margin-top:40px;\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">Step 2: Algorithms.</h4>\n            </div>\n            <div class=\"panel-body\">\n               \n                    <div class=\"form-group\">\n                        <label for=\"name\" class=\"control-label\">Algorithm name</label>\n                        <div class=\"input-control text\">\n                            <select id=\"algorithm-name\" name=\"algorithm-name\" class=\"form-control\">\n                                <optgroup label=\"Numerical Prediction\">\n                                    <option value=\"LINEAR_REGRESSION\">LINEAR REGRESSION</option>\n                                    <option value=\"RIDGE_REGRESSION\">RIDGE REGRESSION</option>\n                                    <option value=\"LASSO_REGRESSION\">LASSO REGRESSION</option>\n                                    <option value=\"RANDOM_FOREST_REGRESSION\">RANDOM FOREST REGRESSION</option>\n                                </optgroup>                        \n                                <optgroup label=\"Binary Classification\">\n                                    <option value=\"LOGISTIC_REGRESSION\">LOGISTIC REGRESSION SGD</option>\n                                    <option value=\"SVM\">SVM</option>\n                                </optgroup>\n                                <optgroup label=\"Multiclass Classification\">\n                                <option value=\"LOGISTIC_REGRESSION_LBFGS\">LOGISTIC REGRESSION L-BFGS</option>\n                                    <option value=\"DECISION_TREE\">DECISION TREE</option>\n                                    <option value=\"RANDOM_FOREST_CLASSIFICATION\">RANDOM FOREST CLASSIFICATION</option>\n                                    <option value=\"NAIVE_BAYES\">NAIVE BAYES</option>\n                                </optgroup>                        \n                                <optgroup label=\"Clustering\">\n                                    <option value=\"K_MEANS\">K-MEANS</option>\n                                </optgroup>\n                                <optgroup label=\"Anomaly Detection\">\n                                    <option value=\"K_MEANS_ANOMALY_DETECTION_WITH_UNLABELED_DATA\">K-MEANS WITH UNLABELED DATA</option>\n                                    <option value=\"K_MEANS_ANOMALY_DETECTION_WITH_LABELED_DATA\">K-MEANS WITH LABELED DATA</option>\n                                </optgroup>\n                    <optgroup label=\"Deep Learning\">\n                                    <option value=\"STACKED_AUTOENCODERS\">STACKED AUTOENCODERS</option>\n                                </optgroup>\n                    <optgroup label=\"Recommendation\">\n                                    <option value=\"COLLABORATIVE_FILTERING\">COLLABORATIVE FILTERING (Explicit Data)</option>\n                                    <option value=\"COLLABORATIVE_FILTERING_IMPLICIT\">COLLABORATIVE FILTERING (Implicit Feedback Data)</option>\n                                </optgroup>\n                            </select>\n                        </div>\n                    </div>\n                    \n                    <div class=\"form-group\">\n                        <label for=\"target-variable\" class=\"control-label\">Response variable</label>\n                        <select class=\"form-control\" id=\"target-variable\" name=\"target-variable\">\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        </select>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"training-fraction\" class=\"control-label\">Train data fraction</label>\n                        <input type=\"text\" id=\"training-fraction\" name=\"training-fraction\" value=\"0.7\" class=\"form-control\">\n                    </div>\n\n                    <div class=\"form-atfooter\">\n                        <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Proceed to Parameters</button>\n                        <a href=\"javascript:void(0);\" id=\"back-btn\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n                Back</a>\n\n                        <span id=\"notice\" class=\"btn btn-link\"></span>\n                    </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n";
  return buffer;
  });
templates['analysis'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.created_at)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/workflow/";
  if (helper = helpers.makeid) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.makeid); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">Open Workflow</a>&nbsp;\n                             <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/edit\">Edit</a>&nbsp;\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/delete\">Delete</a>\n                        </td>\n                    </tr>\n                ";
  return buffer;
  }

  buffer += "<style>\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n</style>\n<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/new\">New Analysis</a>\n          </li>\n\n      </ul>\n      <ul class=\"report-menu-list\">\n        <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-chevron-left\"></span> BACK TO PROJECT</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n\n<div class=\"row\">\n\n<div class=\"col-md-2\"></div>\n\n<div class=\"col-md-8\">\n    <div id=\"listPane\" class=\"tab-pane fade active in\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Analysis</h3>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Date</th>\n                    <th></th>\n                </tr>\n                </thead>\n                <tbody>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>\n</div>";
  return buffer;
  });
templates['build'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n              <th class=\"fixed\" style=\"border: 1px solid #EEEEEE; font-size:12px; white-space: nowrap; font-family: sans-serif;\">\n              ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n              <p style=\"font-size:10px; font-weight:normal;\">";
  if (helper = helpers.dataType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dataType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n              </th>\n              ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <tr>\n                  ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n              </tr>\n          ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                      <td style=\"font-size:12px; white-space: nowrap; border: 1px solid #EEEEEE;\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                  ";
  return buffer;
  }

  buffer += "<style>\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n.column {\n    padding: 5px 10px;\n    margin-bottom: 2;\n    /*background: #d5b1b1;*/\n    background: #efe3e3;\n    border: 2px solid #d5b1b1;\n    color: #494949;\n    border-radius: 0;\n    font-size: 13px;\n    height: 30px;\n    cursor: move;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    border-bottom: 1px solid #be8a8a;\n    -webkit-transition: box-shadow 0.3s;\n    transition: box-shadow 0.3s;\n}\n.header:hover{\n  background: #ededed;\n  cursor: pointer;\n}\n.item {\n        height: 64px;\n        width: 64px;\n        position: absolute;\n        border: 1px solid #9c9c9c;\n        float: left;\n        text-align: center;\n        font-size: 12px;\n\n        list-style: none;\n        float: left;\n        margin-right: 3px;\n        background-color: #E7F6FF;\n        border-radius: 3px;\n        padding: 8px 12px;\n        font-size: 11px;\n        cursor: move;\n        align-items: center;\n        background-color: #E7F6FF;\n        border: 1px solid #DDDDDD;\n        display: inline-flex;\n        flex-direction: row;\n    }\n    .label {\n    font-size: 13px;\n    width: 110px;\n    text-align: center;\n    color: #333333;\n    position: absolute;\n    left: -22px;\n    top: 66px;\n    text-align: center;\n    height: 54px;\n    overflow: hidden;\n    word-wrap: break-word;\n    pointer-events: none;\n    font-weight: normal;\n}\n\n#BusyBox\n{\nbackground: #F9F9F9;\nborder-top-left-radius: 5px;\nborder-top-right-radius: 5px;\nbottom: 0;\nfont-size: 0.8em;\nfont-style: normal;\nfont-weight: normal;\nleft: 25%;\nmargin-left: -45px;\npadding-top: 20px;\nposition: fixed;\ntext-align: center;\nwidth: 950px;\nheight: 280px;\nz-index: 1000;\nmargin-bottom: -350px;\nbackground-repeat:no-repeat;\nbackground-position: center center;\n}\n\n\n.nav-tabs { border-bottom: 2px solid #DDD; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { border-width: 0; }\n    .nav-tabs > li > a { border: none; color: #666; }\n    .nav-tabs > li.active > a, .nav-tabs > li > a:hover { border: none; color: #F4C269 !important; background: transparent; }\n    .nav-tabs > li > a::after { content: \"\"; background: #F4C269; height: 2px; position: absolute; width: 100%; left: 0px; bottom: -1px; transition: all 250ms ease 0s; transform: scale(0); }\n    .nav-tabs > li.active > a::after, .nav-tabs > li:hover > a::after { transform: scale(1); }\n    .tab-nav > li > a::after { background: #21527d none repeat scroll 0% 0%; color: #fff; }\n    .tab-pane { padding: 15px 0; }\n    .tab-content{padding:20px}\n.card {\n  /*background: #FFF none repeat scroll 0% 0%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); */\n  margin-top:-8px;\n  padding-top: -25px;\n  margin-bottom: 30px;\n}\n\n</style>\n<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/new\"><span id=\"save-icon\" class=\"glyphicon glyphicon-floppy-disk\"></span> SAVE WORKFLOW</a>\n          </li>\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/workflow/";
  if (helper = helpers.make_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.make_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/ml\"><span class=\"glyphicon glyphicon-barcode\"></span> MODELS</a>\n          </li>\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/workflow/";
  if (helper = helpers.make_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.make_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-compressed\"></span> TASKS</a>\n          </li>\n\n      </ul>\n      <ul class=\"report-menu-list\">\n        <li>\n             <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-chevron-left\"></span> BACK TO PROJECT</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n\n<div class=\"row\">\n  <div class=\"app-sidebar\">\n    <div class=\"card\">\n      <ul class=\"nav nav-tabs\" role=\"tablist\" style=\"font-size:12px;\">\n        <li role=\"presentation\">\n          <a href=\"#content\" id=\"overview\" aria-controls=\"home\" title=\"Overview of Sales analytics\" role=\"tab\" data-toggle=\"tab\"><i class=\"fa fa-code-fork\"></i> Sampling</a>\n        </li>\n        <li role=\"presentation\" class=\"active\">\n            <a href=\"#content\" id=\"closedrevenue\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\">\n             <i class=\"fa fa-tasks\"></i>  Tasks\n            </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"main-app\" id=\"theCanvas\">\n    <div style=\"margin-bottom:10px; margin-left:10px; margin-top:2px;\">\n        Sample: <b>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_content)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b> rows, <b>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_list)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b> cols\n    </div>\n    <div style=\"overflow-y: auto; height:510px; border: 1px solid #EEEEEE;\">\n      <table class=\"table table-hover\">\n          <thead style=\"background-color: #ffffff;\">\n          <tr>\n              ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </tr>\n          </thead>\n          <tbody>\n          ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_content), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          </tbody>\n        </table>\n    </div>\n  </div>\n\n\n\n</div>";
  return buffer;
  });
templates['build_model'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<style>\n.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n\n\n\n<div class=\"row\" id=\"build_model\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div style=\"margin: 0 auto; margin-top:40px;\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">Step 4: Build Model.</h4>\n            </div>\n            <div class=\"panel-body\">\n                    <div class=\"form-group\">\n                        <label for=\"model_name\" class=\"control-label\">Model Name</label>\n                        <input type=\"text\" id=\"model_name\" name=\"model_name\" value=\"\" class=\"form-control\">\n                    </div>\n\n                    <div class=\"form-atfooter\">\n                        <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Build Model</button>\n                        <a href=\"javascript:void(0);\" id=\"back-btn\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n                Back</a>\n\n                        <span id=\"notice\" class=\"btn btn-link\"></span>\n                    </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n";
  });
templates['connectors'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"subnav-report\" id=\"subnav-report\">\n    <div class=\"container-fluid\">\n        <ul class=\"report-menu-list-rt\">\n\n            <!--<li>-->\n                <!--<a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new\">New Dataset</a>-->\n            <!--</li>-->\n\n        </ul>\n        <ul class=\"report-menu-list\">\n             <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n         <li>\n            <a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-play\"></span> JOBS</a>\n         </li>\n         <li>\n             <a class=\"settings-link\" href=\"javascript:void(0);\">\n                 <span class=\"glyphicon glyphicon-cog\"></span> SETTINGS\n             </a>\n         </li>\n\n\n        </ul>\n    </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <p style=\"margin-bottom: 20px;\" class=\"lead text-center\">Choose a new data source from the list below:</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <ul class=\"page-list\">\n\n\n            <li class=\"page-list-item\">\n                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new/upload\" title=\"Uplaod a CSV data file to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/csv.png\" class=\"type\">\n                        <div class=\"title\">CSV</div>\n                    </div>\n                </a>\n            </li>\n\n            <li class=\"page-list-item\">\n                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new/mysql\" title=\"Add a new MySQL data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/mysql.png\" class=\"type\">\n                        <div class=\"title\">MySQL</div>\n                    </div>\n                </a>\n            </li>\n            \n            <li class=\"page-list-item\">\n                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new/postgresql\" title=\"Add a new PostgreSQL data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/postgresql.png\" class=\"type\">\n                        <div class=\"title\">PostgreSQL</div>\n                    </div>\n                </a>\n            </li>\n            <li class=\"page-list-item\">\n                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new/cloudsql\" title=\"Add a new Google Cloud SQL data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/cloudsql.png\" class=\"type\">\n                        <div class=\"title\">Google Cloud SQL</div>\n                    </div>\n                </a>\n            </li>\n\n            <li class=\"page-list-item\">\n                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new/redshift\" title=\"Add a new Amazon Redshift data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/redshift.png\" class=\"type\">\n                        <div class=\"title\">Amazon Redshift</div>\n                    </div>\n                </a>\n            </li>\n            <li class=\"page-list-item\" style=\"display: none;\">\n                <a href=\"#\" title=\"Add a new Salesforce data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/sfdc.png\" class=\"type\">\n                        <div class=\"title\">Salesforce (coming soon...) </div>\n                    </div>\n                </a>\n            </li>\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"#\" title=\"Add a new Oracle data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/oracle.png\" class=\"type\">\n                        <div class=\"title\">Oracle (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"\" title=\"Add a new Azure SQL Database data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/microsoftsql.png\" class=\"type\">\n                        <div class=\"title\">Azure SQL Database (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"\" title=\"Add a new SQL Server data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/microsoftsql.png\" class=\"type\">\n                        <div class=\"title\">SQL Server (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"#\" title=\"Add a new Amazon RDS data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/amazon.png\" class=\"type\">\n                        <div class=\"title\">Amazon RDS (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"#\" title=\"Add a new HP Vertica source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/vertica.png\" class=\"type\">\n                        <div class=\"title\">HP Vertica (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"#\" title=\"Add a new Heroku data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/heroku.png\" class=\"type\">\n                        <div class=\"title\">Heroku (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"#\" title=\"Add a new IBM DB2 data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/db2.png\" class=\"type\">\n                        <div class=\"title\">IBM DB2 (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n\n            <li class=\"page-list-item\" style=\"display:none;\">\n                <a href=\"#\" title=\"Add a new IBM DashDB data source to SiQueries.\" class=\"page-list-title\">\n                    <div class=\"page-list-inner\"><img src=\"/static/images/connectors/dashdb.png\" class=\"type\">\n                        <div class=\"title\">IBM DashDB (coming soon...)</div>\n                    </div>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>";
  return buffer;
  });
templates['csv'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<style>\n.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n\n<div style=\"max-width: 512px; margin: 0 auto; margin-top:40px;\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Create dataset from file source.</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form method=\"post\" id=\"fileForm\" enctype=\"multipart/form-data\">\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"control-label\">Dataset Name</label>\n                <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"e.g. name for this dataset: Churn Dataset\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\" class=\"control-label\">Description</label>\n                <input type=\"text\" id=\"description\" name=\"description\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"file\" class=\"control-label\">Data Source (max size: 100MB)</label>\n                <input type=\"file\" id=\"file\" name=\"file\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"dataformat\" class=\"control-label\">Data Format</label>\n                <select class=\"form-control\" id=\"dataformat\" name=\"dataformat\">\n                    <option value=\"csv\">CSV</option>\n                    <option value=\"tsv\">TSV</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <label for=\"columnheader\" class=\"control-label\">Column header available</label>\n                <select class=\"form-control\" id=\"columnheader\" name=\"columnheader\">\n                    <option value=\"yes\">Yes</option>\n                    <option value=\"no\">No</option>\n                </select>\n            </div>\n\n            <div class=\"form-group\">\n                <div class=\"progress progress-small\" id=\"progressb\" style=\"display:none;\">\n                    <div class=\"progress-bar progress-bar-success\"></div>\n                </div>\n            </div>\n           \n            <div class=\"form-atfooter\">\n                <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Create dataset</button>\n                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n        Cancel</a>\n\n                <span id=\"notice\" class=\"btn btn-link\"></span>\n            </div>\n        </form>\n    </div>\n</div>";
  return buffer;
  });
templates['datasets'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.data_type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.created_at)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/datasets/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/explore\">Explore</a>&nbsp;\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/datasets/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/delete\">Delete</a>\n                        </td>\n                    </tr>\n                ";
  return buffer;
  }

  buffer += "<style>\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n</style>\n<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new\">New Dataset</a>\n          </li>\n\n      </ul>\n      <ul class=\"report-menu-list\">\n\n        <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-chevron-left\"></span> BACK TO PROJECT</a>\n         </li>\n\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n<div class=\"col-md-1\"></div>\n\n<div class=\"col-md-10\">\n    <div id=\"listPane\" class=\"tab-pane fade active in\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Datasets</h3>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Description</th>\n                    <th>Type</th>\n                    <th>Date</th>\n                    <th></th>\n                </tr>\n                </thead>\n                <tbody>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['editclassificationproject'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n</div>\n<div class=\"row\">\n    <div class=\"col-md-4 side-nav\"></div>\n    <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Create a classification project.</h3>\n            </div>\n            <div class=\"panel-body\">\n\n                <form method=\"post\" style=\"max-width: 412px;\" id=\"profileForm\">\n\n					<span style=\"margin-left:40px;\">\n\n                    </span>\n                    <div class=\"bg-callout bg-callout-info\">\n                        <h4>Classification</h4>\n                        <p style=\"line-height: 90%;\">A machine learning <strong>Classification</strong> task is a Predication of data in two or more classes. </p>\n                        <p style=\"line-height: 90%;\">e.g.: Predicting the status of a parcel delivery into either cancelled, delivery, delayed etc..\n                        </p>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"name\" class=\"control-label\">Project Name:</label>\n                        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" value=\"";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"description\" class=\"control-label\">Description:</label>\n                        <textarea rows=\"5\" cols=\"10\" id=\"description\" name=\"description\" class=\"form-control\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n                    </div>\n                    <div class=\"form-atfooter\">\n                        <button type=\"submit\" class=\"btn btn-primary\" id=\"create-project\">Update Project</button>\n                        <button type=\"submit\" class=\"btn btn-default\" id=\"cancel\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 side-nav\"></div>\n</div>";
  return buffer;
  });
templates['empty_drag'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });
templates['explore'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <th class=\"fixed\" style=\"font-size:12px; white-space: nowrap; font-family: sans-serif; border: 1px solid #EEEEEE;\">\n                        ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                        <p style=\"font-size:10px; font-weight:normal;\">";
  if (helper = helpers.dataType) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dataType); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                        </th>\n                        ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <tr>\n                            ";
  stack1 = helpers.each.call(depth0, depth0, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        </tr>\n                    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <td style=\"font-size:12px; white-space: nowrap; border: 1px solid #EEEEEE;\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                            ";
  return buffer;
  }

  buffer += "<style>\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n.fixed{\n}\n</style>\n<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new\">New Dataset</a>\n          </li>\n\n      </ul>\n      <ul class=\"report-menu-list\">\n\n        <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-chevron-left\"></span> BACK TO PROJECT</a>\n         </li>\n\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n\n\n<div class=\"col-md-12\">\n    <div id=\"listPane\" class=\"tab-pane fade active in\">\n        <div class=\"panel panel-default\">\n            <div class=\" \"> <!-- panel-heading -->\n                <h3 class=\"panel-title\" style=\"margin-top:10px; margin-left: 10px;\">Explore "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " dataset</h3>\n            </div>\n            <div style=\"margin-bottom:10px; margin-left:10px; margin-top:10px;\">\n                Sample: <b>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_content)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b> rows, <b>"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_list)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</b> cols\n            </div>\n            <div style=\"overflow-y: auto; height:410px;\">\n                <table class=\"table table-hover\">\n                    <thead>\n                    <tr>\n                        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_list), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tr>\n                    </thead>\n                    <tbody>\n                    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.model)),stack1 == null || stack1 === false ? stack1 : stack1.header_content), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n    </div>\n</div>";
  return buffer;
  });
templates['home'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n    <ul class=\"report-menu-list\">\n        <li>\n            <a>Home</a>\n        </li>\n    </ul>\n</div>\n";
  });
templates['input'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<a href=\"javascript:void(0);\" class=\"option\"><div style=\"padding-left:8px;\"><i class=\"fa fa-database fa-2x\"></i></div>\n<div class=\"label\">Input Dataset</div>\n</a>";
  });
templates['loading'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<style type=\"text/css\">\n	#loadingDiv {\n    position: fixed;\n    top: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff;\n    background-image: url('/static/images/loading.gif');\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 10000000;\n    opacity: 0.4;\n    filter: alpha(opacity=40);\n    /* For IE8 and earlier */\n}\n</style>\n\n<div id=\"loadingDiv\"> \n</div>";
  });
templates['model'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.created_at)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/view\">View</a>&nbsp;\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/delete\">Delete</a>\n                        </td>\n                    </tr>\n                ";
  return buffer;
  }

  buffer += "<style>\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n.column {\n    padding: 5px 10px;\n    margin-bottom: 2;\n    /*background: #d5b1b1;*/\n    background: #efe3e3;\n    border: 2px solid #d5b1b1;\n    color: #494949;\n    border-radius: 0;\n    font-size: 13px;\n    height: 30px;\n    cursor: move;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    border-bottom: 1px solid #be8a8a;\n    -webkit-transition: box-shadow 0.3s;\n    transition: box-shadow 0.3s;\n}\n.header:hover{\n  background: #ededed;\n  cursor: pointer;\n}\n.item {\n        height: 64px;\n        width: 64px;\n        position: absolute;\n        border: 1px solid #9c9c9c;\n        float: left;\n        text-align: center;\n        font-size: 12px;\n\n        list-style: none;\n        float: left;\n        margin-right: 3px;\n        background-color: #E7F6FF;\n        border-radius: 3px;\n        padding: 8px 12px;\n        font-size: 11px;\n        cursor: move;\n        align-items: center;\n        background-color: #E7F6FF;\n        border: 1px solid #DDDDDD;\n        display: inline-flex;\n        flex-direction: row;\n    }\n    .label {\n    font-size: 13px;\n    width: 110px;\n    text-align: center;\n    color: #333333;\n    position: absolute;\n    left: -22px;\n    top: 66px;\n    text-align: center;\n    height: 54px;\n    overflow: hidden;\n    word-wrap: break-word;\n    pointer-events: none;\n    font-weight: normal;\n}\n\n#BusyBox\n{\nbackground: #F9F9F9;\nborder-top-left-radius: 5px;\nborder-top-right-radius: 5px;\nbottom: 0;\nfont-size: 0.8em;\nfont-style: normal;\nfont-weight: normal;\nleft: 25%;\nmargin-left: -45px;\npadding-top: 20px;\nposition: fixed;\ntext-align: center;\nwidth: 950px;\nheight: 280px;\nz-index: 1000;\nmargin-bottom: -350px;\nbackground-repeat:no-repeat;\nbackground-position: center center;\n}\n\n\n.nav-tabs { border-bottom: 2px solid #DDD; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover { border-width: 0; }\n    .nav-tabs > li > a { border: none; color: #666; }\n    .nav-tabs > li.active > a, .nav-tabs > li > a:hover { border: none; color: #F4C269 !important; background: transparent; }\n    .nav-tabs > li > a::after { content: \"\"; background: #F4C269; height: 2px; position: absolute; width: 100%; left: 0px; bottom: -1px; transition: all 250ms ease 0s; transform: scale(0); }\n    .nav-tabs > li.active > a::after, .nav-tabs > li:hover > a::after { transform: scale(1); }\n    .tab-nav > li > a::after { background: #21527d none repeat scroll 0% 0%; color: #fff; }\n    .tab-pane { padding: 15px 0; }\n    .tab-content{padding:20px}\n.card {\n  /*background: #FFF none repeat scroll 0% 0%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3); */\n  margin-top:-8px;\n  padding-top: -25px;\n  margin-bottom: 30px;\n}\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n</style>\n<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/workflow/";
  if (helper = helpers.make_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.make_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-compressed\"></span> TASKS</a>\n          </li>\n\n          <li>\n              <a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-retweet\"></span> NEW MODELS</a>\n          </li>\n\n      </ul>\n      <ul class=\"report-menu-list\">\n        <li>\n             <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"><span class=\"glyphicon glyphicon-chevron-left\"></span> BACK TO PROJECT</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n\n\n<div class=\"row\">\n\n<div class=\"col-md-2\"></div>\n\n<div class=\"col-md-8\">\n    <div id=\"listPane\" class=\"tab-pane fade active in\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Models</h3>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Date</th>\n                    <th></th>\n                </tr>\n                </thead>\n                <tbody>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>\n</div>";
  return buffer;
  });
templates['models'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    <tr>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.created_at)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                        <td>\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/view\">View</a>&nbsp;\n                            <a href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.project_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/analysis/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/delete\">Delete</a>\n                        </td>\n                    </tr>\n                ";
  return buffer;
  }

  buffer += "<style>\ntable.fixed { table-layout:fixed; }\ntable.fixed td { overflow: hidden; }\n</style>\n<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n\n          <li>\n              <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/";
  if (helper = helpers.analysis_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.analysis_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/models/new\">New Model</a>\n          </li>\n\n      </ul>\n      <ul class=\"report-menu-list\">\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n         <li>\n            <a href=\"javascript:void(0);\"><span class=\"glyphicon glyphicon-play\"></span> JOBS</a>\n         </li>\n         <li>\n             <a class=\"settings-link\" href=\"javascript:void(0);\">\n                 <span class=\"glyphicon glyphicon-cog\"></span> SETTINGS\n             </a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n\n<div class=\"row\">\n\n<div class=\"col-md-2\"></div>\n\n<div class=\"col-md-8\">\n    <div id=\"listPane\" class=\"tab-pane fade active in\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Models</h3>\n            </div>\n\n            <table class=\"table table-hover\">\n                <thead>\n                <tr>\n                    <th>Name</th>\n                    <th>Date</th>\n                    <th></th>\n                </tr>\n                </thead>\n                <tbody>\n                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>\n</div>";
  return buffer;
  });
templates['mysql'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "\n\n\n<style>\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n<div class=\"page-header\">\n    <div class=\"actions\"><a href=\"/projects/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets/new\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n        Back to Connectors</a>\n    </div>\n    <h4>Add a new MySQL data source</h4>\n</div>\n\n<div style=\"max-width: 512px; margin: 0 auto;\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Add a new MySQL data source.</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form method=\"post\" id=\"mysqlForm\">\n            <div class=\"bg-callout bg-callout-info\">\n                <h4>Security and networking</h4>\n                <p>Depending on your network security settings, you may need to grant us inbound access to your database. </p>\n                <p>SiQueries will connect to your database from following IP Addresses:\n                    <strong class=\"click-to-select\">45.55.241.135, 104.236.95.148, 159.203.107.31</strong>\n                </p>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"control-label\">Title</label>\n                <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"A name for this data source, e.g., Demo Analytics\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"host\" class=\"control-label\">Server (hostname or IP address)</label>\n                <input type=\"text\" id=\"host\" name=\"host\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"port\" class=\"control-label\">Port number</label>\n                <input type=\"text\" id=\"port\" name=\"port\" value=\"3306\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"database\" class=\"control-label\">Database name</label>\n                <input type=\"text\" id=\"database\" name=\"database\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"username\" class=\"control-label\">Database user</label>\n                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"password\" class=\"control-label\">Database password</label>\n                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\">\n            </div>\n            <div class=\"checkbox\">\n                <label>\n                    <input type=\"checkbox\" id=\"ssl\" name=\"ssl\" value=\"true\" checked=\"checked\">Use SSL to connect to your database</label>\n            </div>\n            <div class=\"checkbox\">\n                <label>\n                    <input type=\"checkbox\" id=\"validateSsl\" name=\"validateSsl\" value=\"true\">Validate the SSL certificate on your server</label>\n            </div>\n            <div class=\"form-group\" style=\"display: none;\">\n                <label for=\"sslCert\" class=\"control-label\">Paste your SSL certificate in PEM format here:</label>\n                <textarea type=\"textarea\" rows=\"3\" id=\"sslCert\" name=\"sslCert\" class=\"form-control\" disabled=\"\"></textarea>\n            </div>\n            <div class=\"form-atfooter\">\n                <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Connect to this data source</button><span id=\"notice\" class=\"btn btn-link\"></span>\n            </div>\n        </form>\n    </div>\n</div>";
  return buffer;
  });
templates['new_analysis'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        <option value=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n                    ";
  return buffer;
  }

  buffer += "<style>\n.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n\n<div style=\"max-width: 512px; margin: 0 auto; margin-top:40px;\" class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">Create analysis workflow.</h4>\n    </div>\n    <div class=\"panel-body\">\n        <form method=\"post\" id=\"analysisForm\">\n\n\n            <div class=\"form-group\">\n                <label for=\"name\" class=\"control-label\">Analysis Name</label>\n                <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"e.g. name for this dataset: Churn Dataset\" class=\"form-control\">\n            </div>\n            \n            <div class=\"form-group\">\n                <label for=\"dataset\" class=\"control-label\">Select Dataset</label>\n                <select class=\"form-control\" id=\"dataset\" name=\"dataset\">\n                    <option></option>\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.datasets), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </select>\n            </div>\n\n            <div class=\"form-atfooter\">\n                <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Create</button>\n                <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n        Back to Analysis</a>\n\n                <span id=\"notice\" class=\"btn btn-link\"></span>\n            </div>\n\n\n\n        </form>\n    </div>\n</div>";
  return buffer;
  });
templates['new_model'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                                <tr>\n                                    <td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n                                    <td><input type=\"checkbox\" id=\"include_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"include_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" checked=\"checked\"></td>\n                                    <td>\n                                        <select style=\"width:120px;\" class=\"form-control\" id=\"type_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"type_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                                            ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.dataType), "NUMERICAL", options) : helperMissing.call(depth0, "if_eq", ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.dataType), "NUMERICAL", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                        </select>\n                                    \n                                    </td>\n                                    <td>\n                                        <select style=\"width:120px;\" class=\"form-control\" id=\"impute_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"impute_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n                                                <option value=\"discard\">DISCARD</option>\n                                        </select>\n                                    </td>\n                                </tr>\n                           ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                                                <option value=\"numerical\" selected=\"\">NUMERICAL</option>\n                                                <option value=\"categorical\">CATEGORICAL</option>\n                                            ";
  }

function program4(depth0,data) {
  
  
  return "\n                                                <option value=\"numerical\">NUMERICAL</option>\n                                                <option value=\"categorical\" selected=\"\">CATEGORICAL</option>\n                                            ";
  }

  buffer += "<style>\n.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <div style=\"margin: 0 auto; margin-top:40px;\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">Step 1: Preprocess.</h4>\n            </div>\n            <div class=\"panel-body\">\n                    <div class=\"form-group\" style=\"display:none;\">\n                        <label for=\"name\" class=\"control-label\">Model Name</label>\n                        <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"e.g. name for this dataset: Churn Dataset\" class=\"form-control\">\n                    </div>\n\n                    <table class=\"table table-hover\">\n                            <thead>\n                            <tr>\n                                <th>Feature</th>\n                                <th>Include</th>\n                                <th>Type</th>\n                                <th>Impute</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </tbody>\n                        </table>\n\n                    <div class=\"form-atfooter\">\n                        <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Proceed to Algorithms</button>\n                        <a href=\"/project/";
  if (helper = helpers.project_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.project_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis/";
  if (helper = helpers.analysis_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.analysis_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/models\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n                Back</a>\n\n                        <span id=\"notice\" class=\"btn btn-link\"></span>\n                    </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n";
  return buffer;
  });
templates['newproject'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div style=\"margin-top:50px;\"></div>\n\n<div class=\"row\">\n    <div class=\"col-md-4 side-nav\"></div>\n    <div class=\"col-md-5\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Create a machine learning project.</h3>\n            </div>\n            <div class=\"panel-body\">\n\n                <form method=\"post\" style=\"max-width: 412px;\" id=\"profileForm\">\n\n                    <span style=\"margin-left:40px;\">\n\n                    </span>\n                    <div class=\"form-group\">\n                        <label for=\"name\" class=\"control-label\">Project Name:</label>\n                        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" value=\"\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"description\" class=\"control-label\">Description:</label>\n                        <textarea rows=\"5\" cols=\"10\" id=\"description\" name=\"description\" class=\"form-control\"></textarea>\n                    </div>\n                    <div class=\"form-atfooter\">\n                        <button type=\"submit\" class=\"btn btn-primary\" id=\"create-project\">Create Project</button>\n                        <button type=\"submit\" class=\"btn btn-default\" id=\"cancel\">Cancel</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 side-nav\"></div>\n</div>";
  });
templates['noproject'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"panel panel-message\">\n            <div style=\"margin: 5px 30px;\" class=\"panel-body\">\n                <h4>There are no projects in this account.</h4>\n                <p><a href=\"/project/add\" class=\"bold\">Start by creating one.</a>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n";
  });
templates['parameters'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "\n                        <div class=\"form-group\">\n                            <label for=\"Num_Trees\" class=\"control-label\">Num Trees</label>\n                            <input type=\"text\" id=\"Num_Trees\" name=\"Num_Trees\" value=\"5\" class=\"form-control\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Max_Depth\" class=\"control-label\">Max Depth</label>\n                            <input type=\"text\" id=\"Max_Depth\" name=\"Max_Depth\" value=\"5\" class=\"form-control\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Max_Bins\" class=\"control-label\">Max Bins</label>\n                            <input type=\"text\" id=\"Max_Bins\" name=\"Max_Bins\" value=\"100\" class=\"form-control\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Impurity\" class=\"control-label\">Impurity</label>\n                            <input type=\"text\" id=\"Impurity\" name=\"Impurity\" value=\"gini\" class=\"form-control\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Feature_Subset_Strategy\" class=\"control-label\">Feature Subset Strategy</label>\n                            <input type=\"text\" id=\"Feature_Subset_Strategy\" name=\"Feature_Subset_Strategy\" value=\"auto\" class=\"form-control\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Seed\" class=\"control-label\">Seed</label>\n                            <input type=\"text\" id=\"Seed\" name=\"Seed\" value=\"12345\" class=\"form-control\">\n                        </div>\n                    ";
  }

  buffer += "<style>\n.fileUpload {\n    position: relative;\n    overflow: hidden;\n    margin: 10px;\n}\n.fileUpload input.upload {\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0;\n    padding: 0;\n    font-size: 20px;\n    cursor: pointer;\n    opacity: 0;\n    filter: alpha(opacity=0);\n}\n    .form-atfooter {\n        margin-top: 15px;\n        padding: 14px 0 15px;\n        /* text-align: right; */\n        border-top: 1px solid #ddd;\n    }\n</style>\n\n\n\n\n\n\n<div class=\"row\" id=\"parameters\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n        <div style=\"margin: 0 auto; margin-top:40px;\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">Step 3: Parameters.</h4>\n            </div>\n            <div class=\"panel-body\">\n\n                    ";
  stack1 = (helper = helpers.if_eq || (depth0 && depth0.if_eq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, (depth0 && depth0.algorithm), "RANDOM_FOREST_CLASSIFICATION", options) : helperMissing.call(depth0, "if_eq", (depth0 && depth0.algorithm), "RANDOM_FOREST_CLASSIFICATION", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n               \n                    \n\n                    <div class=\"form-atfooter\">\n                        <button name=\"create\" type=\"submit\" id=\"submit-btn\" class=\"btn btn-primary\"><i class=\"fa fa-fw fa-bolt\"></i> Proceed to Build Model</button>\n                        <a href=\"javascript:void(0);\" id=\"back-btn\" class=\"btn btn-default\"><i class=\"fa fa-fw fa-reply\"></i>\n                Back</a>\n\n                        <span id=\"notice\" class=\"btn btn-link\"></span>\n                    </div>\n\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n";
  return buffer;
  });
templates['project'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"subnav-report\" id=\"subnav-report\">\n   <div class=\"container-fluid\">\n      <ul class=\"report-menu-list-rt\">\n        <li>\n            <a href=\"\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " - ";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </li>\n      </ul>\n      <ul class=\"report-menu-list\">\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\"><span class=\"glyphicon glyphicon-cloud-upload\"></span> DATASETS</a>\n         </li>\n         <li>\n             <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\"><span class=\"glyphicon glyphicon-sort\"></span> ANALYSIS</a>\n         </li>\n         <li>\n             <a class=\"settings-link\" href=\"javascript:void(0);\">\n                 <span class=\"glyphicon glyphicon-cog\"></span> SETTINGS\n             </a>\n         </li>\n\n\n      </ul>\n   </div>\n</div>\n<div class=\"page-header\" style=\"margin-top:15px; border-bottom:none;\">\n\n</div>\n\n<div class=\"row\">\n<div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n\n        <div class=\"panel panel-default\" style=\"\">\n            <div class=\"panel-body\">\n                <h4>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</h4>\n                <p>The project was created by ";
  if (helper = helpers.user) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " on ";
  if (helper = helpers.created_at) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.created_at); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</p>\n                <p>\n                    <ul>\n                        <li>\n                            <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\">Analysis</a> where you can prepare, visualize, audit and create Machine Learning models\n                        </li>\n                        <li>\n                            <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\">Datasets</a> where you import and explore your data\n                        </li>\n                        <li>\n                            <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/models\">Models</a> where you try out your created models and export them into PMML to use in your apps.\n                        </li>\n                    </ul>\n                </p>\n\n\n                        <div class=\"col-md-4\">\n\n                            <div class=\"panel panel-default\">\n                                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\">\n                                    <div class=\"panel-body\">\n                                        <h5>ANALYSIS: (<span id='analysis-counter'>0</span>)</h5>\n                                    </div>\n                                </a>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-md-4\">\n\n                            <div class=\"panel panel-default\">\n                                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\">\n                                    <div class=\"panel-body\">\n                                        <h5>DATASETS: (<span id='datasets-counter'>0</span>)</h5>\n                                    </div>\n                                </a>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-md-4\">\n\n                            <div class=\"panel panel-default\">\n                                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\">\n                                    <div class=\"panel-body\">\n                                        <h5>MODELS: (<span id='datasets-counter'>0</span>)</h5>\n                                    </div>\n                                </a>\n                            </div>\n\n                        </div>\n\n\n\n                        <div class=\"col-md-4\" style=\"display:none;\">\n\n                            <div class=\"panel panel-default\">\n                                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/analysis\">\n                                    <div class=\"panel-body\">\n                                        <h5>INSIGHTS: (<span id='analysis-counter'>0</span>)</h5>\n                                    </div>\n                                </a>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-md-4\" style=\"display:none;\">\n\n                            <div class=\"panel panel-default\">\n                                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\">\n                                    <div class=\"panel-body\">\n                                        <h5>DATASETS: (<span id='datasets-counter'>0</span>)</h5>\n                                    </div>\n                                </a>\n                            </div>\n\n                        </div>\n\n                        <div class=\"col-md-4\" style=\"display:none;\">\n\n                            <div class=\"panel panel-default\">\n                                <a href=\"/project/";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/datasets\">\n                                    <div class=\"panel-body\">\n                                        <h5>MODELS: (<span id='datasets-counter'>0</span>)</h5>\n                                    </div>\n                                </a>\n                            </div>\n\n                        </div>\n\n\n            </div>\n        </div>\n\n	</div>\n\n\n\n    \n\n</div>\n<script>\n\n</script>";
  return buffer;
  });
templates['projects'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"col-md-4 col-sm-6\" id=\"project_"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n         <div class=\"data-source-card\">\n            <div class=\"ds-header\">\n               <div class=\"controls dropdown\">\n                  <a data-toggle=\"dropdown\" href=\"javscript://\" class=\"dropdown-toggle actions\">Actions\n                  <b class=\"caret\"></b>\n                  </a>\n                  <ul class=\"dropdown-menu pull-right\">\n                     <li>\n                        <a  href=\"javascript://\" id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"delete-project\">\n                        <i class=\"fa fa-fw fa-ban\"></i>\n                        Delete project\n                        </a>\n                     </li>\n                  </ul>\n               </div>\n            </div>\n            <div class=\"ds-body\">\n               <a data-form-method=\"post\" href=\"/project/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"ds-body-title\">\n                  <div class=\"ds-body-inner\">\n                     <div class=\"title\" style=\"font-size:18px;\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "...</div>\n                     <div class=\"subtitle\"></div>\n                     <div class=\"subtitle\">Created on: "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.created_at)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\n                  </div>\n               </a>\n            </div>\n            <div class=\"ds-footer\">\n               <i class=\"fa fa-fw fa-pie-chart type\"  style=\"font-size:30px; color: #C2C6CB;\"></i>\n               <div class=\"controls\">\n                  <a href=\"/project/edit/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"\n                     class=\"edit-project\" title=\"Edit this project's details.\" style=\"margin-top:5px;\">\n                  <i class=\"fa fa-lg fa-gear\"  id=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></i>\n                  </a>\n               </div>\n            </div>\n         </div>\n      </div>\n      ";
  return buffer;
  }

  buffer += "<style>\n   .page-header {\n   padding-bottom: 9px;\n   margin: 10px 0 20px;\n   border-bottom: 1px solid #eee;\n   }\n   .page-header1 {\n   padding-bottom: 9px;\n   margin: 10px 0 20px;\n   border-bottom: 0px solid #eee;\n   }\n</style>\n<div class=\"container-fluid\">\n   <ul class=\"report-menu-list-rt\">\n      <li>\n         <a href=\"/project/add\">Create project</a>\n      </li>\n   </ul>\n   <ul class=\"report-menu-list\">\n      <li>\n         <a>PROJECTS</a>\n      </li>\n   </ul>\n</div>\n\n\n\n<div class=\"row\">\n\n   <div class=\"col-md-1\"></div>\n   <div class=\"col-md-10 side-nav\" style=\"margin-top:30px; overflow:auto; height:500px;\" id=\"project-content\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n   </div>\n   <!-- <div class=\"app-sidebar\" style=\"margin-top:4px;\">\n      <input name=\"\" class=\"form-control\" style=\"width:200px; margin-left:-5px;\"><br>\n      <a href=\"/project/add\" class=\"btn btn-default\" style=\"width:200px; margin-left:-5px;\">\n          <i class=\"fa fa-fw fa-plus\"></i> create project\n      </a>\n      \n      </div>\n      \n      <div id=\"main\" class=\"main-app\" style=\"margin-top:0px;\">\n      \n      \n      \n      </div> -->\n</div>";
  return buffer;
  });
})();