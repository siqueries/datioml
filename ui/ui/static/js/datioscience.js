var DatioRoutes = Backbone.Router.extend({
    routes: {
        "/": "projects",
        //"/projects": "projects",
        "/project/add": "add_project",
        "/project/:id": "project",

        "/project/:id/datasets": "datasets",
        "/project/:id/datasets/new": "new_dataset",
        "/project/:id/datasets/new/upload": "upload",
        "/project/:id/datasets/new/mysql": "mysql",
        "/project/:id/datasets/:dataset_id/explore": "explore",
        "/project/:id/analysis/new": "new_analysis",
        "/project/:id/analysis": "analysis",
        "/project/:id/analysis/:analysis_id": "view_analysis",
        "/project/:id/analysis/:analysis_id/workflow/:i": "build_analysis",
        "/project/:id/analysis/:analysis_id/workflow/:i/ml": "model",

        "/project/:id/analysis/:analysis_id/models": "models",

        "/project/:id/analysis/:analysis_id/models/new": "new_model",
        "/project/:id/analysis/:analysis_id/models/new/algorithms/:i": "algorithms",
        "/project/:id/analysis/:analysis_id/models/new/parameters/:i": "parameters",
        "/project/:id/analysis/:analysis_id/models/new/build_model/:i": "build_model",


        "/project/edit/:id": "edit_project",
        "/settings": "settings",
        "/plans": "plans",
        "/docs": "docs"
    },
    initialize: function() {
        
    },

    home: function(){
        var $layout = $("#viewLayout");
        $layout.empty();
        var view = new datioscience.views.homeView();
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    projects: function(){
        var $layout = $("#viewLayout");
        $layout.empty();
        var projectCollections = new datioscience.collections.Projects();
        projectCollections.fetch();

        var view = new datioscience.views.projectsView({collection: projectCollections});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    project: function(id){
        var $layout = $("#viewLayout");
        $layout.empty();
        var project = new datioscience.models.Project({id: id});
        project.fetch({
            success: function(model, resp){
                var view = new datioscience.views.projectView({collection: [], "id": id, model: model});
                var htmlView = view.render().el;
                $layout.html(htmlView);
                datioscience.utils.data_counter(id);
                datioscience.utils.analysis_counter(id);
            },
            error: function () {

            }
        });

    },

    add_project: function(){
        var $layout = $("#viewLayout");
        $layout.empty();
        var project = new datioscience.models.Project();
        var view = new datioscience.views.newProjectView({model: project});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    edit_project: function(id){
        var project = new datioscience.models.Project({id: id});
        project.fetch({
            success: function(model, resp){
                var $layout = $("#viewLayout");
                $layout.empty();
                switch(resp.type){
                    case "classification":
                        var $editview = new datioscience.views.editClassificationProjectView({model: model}).render().el;
                        $layout.html($editview);
                        break;
                }
            },
            error: function () {

            }
        });
    },

    datasets: function(id){
        var $layout = $("#viewLayout");
        $layout.empty();

        var loader = new datioscience.views.loadingView();
        var loaderView = loader.render().el;
        $layout.html(loaderView);

        var datasetCollections = new datioscience.collections.Datasets([], {"id": id});
        datasetCollections.fetch({
            reset: true,
            success: function(collection, response, options){
                var view = new datioscience.views.datasetsView({collection: collection, "id": id});
                $layout.empty();
                var htmlView = view.render().el;
                $layout.html(htmlView);
            }
        });

        
    },

    new_dataset: function(id){
        var $layout = $("#viewLayout");
        $layout.empty();

        var view = new datioscience.views.connectorsView({"id": id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    upload: function(id){
        var $layout = $("#viewLayout");
        $layout.empty();

        var view = new datioscience.views.uploadView({"id": id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    mysql: function(id){
        var $layout = $("#viewLayout");
        $layout.empty();

        var view = new datioscience.views.mysqlView({"id": id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    explore: function(project_id, dataset_id){
        var $layout = $("#viewLayout");
        $layout.empty();

        var loader = new datioscience.views.loadingView();
        var loaderView = loader.render().el;
        $layout.html(loaderView);

        var datasetModel = new datioscience.models.Dataset({"project_id": project_id, "id": dataset_id})
        datasetModel.fetch({
            reset: true,
            success: function(model, response, options){
                var view = new datioscience.views.exploreDatasetView({model: model, "project_id": project_id, "id": dataset_id});
                setTimeout(function(){
                    $layout.empty();
                    var htmlView = view.render().el;
                    $layout.html(htmlView).slideDown();
                    //$layout;
                }, 1000);
                
            }
        });
        
        // setTimeout(function(){
            
        // }, 200);
    },

    new_analysis: function(id){
        var analyze = new datioscience.models.Analyze({"project_id": id});
        var datasetCollections = new datioscience.collections.Datasets([], {"id": id});
        datasetCollections.fetch();
        var $layout = $("#viewLayout");
        $layout.empty();
        setTimeout(function(){
            var view = new datioscience.views.newAnalysisView({model: analyze, "id": id, "datasets": datasetCollections.models});
            var htmlView = view.render().el;
            $layout.html(htmlView);
        }, 100);    
    },

    analysis: function(id){

        var analysisCollections = new datioscience.collections.Analyzes([], {"id": id});
        analysisCollections.fetch();

        var $layout = $("#viewLayout");
        $layout.empty();

        var view = new datioscience.views.analysisView({collection: analysisCollections, "id": id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    view_analysis: function(id){
        var $layout = $("#viewLayout");
        $layout.empty();
        var view = new datioscience.views.connectorsView({"id": id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    build_analysis: function(project_id, analysis_id, i){
        var $layout = $("#viewLayout");
        $layout.empty();

        var loader = new datioscience.views.loadingView();
        var loaderView = loader.render().el;
        $layout.html(loaderView);

        var analysisModel = new datioscience.models.Analyze({"project_id": project_id, "id": analysis_id});
        analysisModel.fetch({
            reset: true,
            success: function(analysisModel, response, options){
                var datasetModel = new datioscience.models.Dataset({"project_id": project_id, "id": response.dataset_id});
                datasetModel.fetch({
                    reset: true,
                    success: function(dsModel, response, options){
                        var view = new datioscience.views.buildAnalysisView({make_id: i, model: dsModel, "project_id": project_id, "id": analysis_id});
                        var htmlView = view.render().el;
                        setTimeout(function(){
                            $layout.empty();
                            $layout.html(htmlView);
                            //view.initializeDraggble();
                            //$layout;
                        }, 1000);
                        
                    }
                });
            }
        });

        
        
    },

    model: function(id, analysis_id, i){
        var $layout = $("#viewLayout");
        $layout.empty();

        var loader = new datioscience.views.loadingView();
        var loaderView = loader.render().el;
        $layout.html(loaderView);

        var modelsCollection = new datioscience.collections.MModels([], {"id": id, "analysis_id": analysis_id});
        modelsCollection.fetch({
            reset: true,
            success: function(collection, response, options){
                var view = new datioscience.views.modelView({collection: collection, "id": analysis_id, make_id: i, "project_id": id, });
                var htmlView = view.render().el;
                setTimeout(function(){
                    $layout.empty();
                    $layout.html(htmlView);
                }, 1000);
                
            }
        });
        
    },

    models: function(id, analysis_id){
        var modelsCollection = new datioscience.collections.MModels([], {"id": id, "analysis_id": analysis_id});
        modelsCollection.fetch();
        var $layout = $("#viewLayout");
        $layout.empty();
        var view = new datioscience.views.modelsView({collection: modelsCollection, "id": id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    new_model: function(id, analysis_id){
        var modelsCollection = new datioscience.collections.MetaData([], {"id": id, "analysis_id": analysis_id});
        modelsCollection.fetch();
        
        var $layout = $("#viewLayout");
        $layout.empty();
        setTimeout(function(){
            var view = new datioscience.views.newModelView({collection: modelsCollection, "id": id, "analysis_id": analysis_id});
            var htmlView = view.render().el;
            $layout.html(htmlView);
        }, 100);
        
    },

    algorithms: function(id, analysis_id, i){
        var modelsCollection = new datioscience.collections.MetaData([], {"id": id, "analysis_id": analysis_id});
        modelsCollection.fetch();
        
        var $layout = $("#viewLayout");
        $layout.empty();
        setTimeout(function(){
            var view = new datioscience.views.algorithmsView({collection: modelsCollection, "id": id, "analysis_id": analysis_id});
            var htmlView = view.render().el;
            $layout.html(htmlView);
        }, 100);
    },

    parameters: function(id, analysis_id, i){
        var $layout = $("#viewLayout");
        $layout.empty();
        var view = new datioscience.views.parametersView({"id": id, "analysis_id": analysis_id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    build_model: function(id, analysis_id, i){
        var $layout = $("#viewLayout");
        $layout.empty();
        var view = new datioscience.views.buildModelView({"id": id, "analysis_id": analysis_id});
        var htmlView = view.render().el;
        $layout.html(htmlView);
    },

    settings: function(){
        var $layout = $("#viewLayout");
        $layout.empty();
        console.log("hello welcome water");
    },

    plans: function(){
        var $layout = $("#viewLayout");
        $layout.empty();
        console.log("hello welcome water");
    },

    docs: function(){
        var $layout = $("#viewLayout");
        $layout.empty();
        console.log("hello welcome water");
    }
});


datioscience.sqr = new DatioRoutes();

$(function() {
    Backbone.history.start({ pushState: true });
    datioscience.sqr.navigate(window.location.pathname, { trigger: true });
});

$(window).keydown(function(event) {
    if(event.ctrlKey && event.keyCode == 84) {
        console.log("Hey! Ctrl+T event captured!");
        event.preventDefault();
    }
    if(event.ctrlKey && event.keyCode == 82) {
        console.log("Hey! Ctrl+S event captured!");
        event.preventDefault();
    }
});

$(document).on('click', 'a[href^="/"]', function (e) {
    var href = $(e.currentTarget).attr('href');
    e.preventDefault();
    if (href === "/logout"){
        window.location = "/logout";
    }else{
        datioscience.sqr.navigate(href, { trigger: true });
    }

});

window.addEventListener('popstate', function(e) {
    datioscience.sqr.navigate(window.location.pathname, { trigger: true });
});



//window.onbeforeunload = function(e){
//    e.preventDefault();
//    var href = $(e.currentTarget).attr('href');
//    sqr.navigate(href, { trigger: true });
//};
//$(window).on('onbeforeunload', function (e) {
//    e.preventDefault();
//    var href = $(e.currentTarget).attr('href');
//    sqr.navigate(href, { trigger: true });
//    //if (!doSomeValidation()) {
//    //    return 'Leaving now will may result in data loss';
//    //}
//});