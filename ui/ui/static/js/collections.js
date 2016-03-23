//chartsCollection
(function(datioscience) {
    var Project = Backbone.Model.extend({
        url : function() {
            var base = '/api/projects';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
    });

    var Projects = Backbone.Collection.extend({
        initialize: function(models, options) {
        },
        model: Project,
        url: function() {
            return '/api/projects';
        }
    });


    var Dataset = Backbone.Model.extend({
        initialize: function(attributes, options) {
            this.project_id = attributes.project_id;
        },
        url : function() {
            var base = '/api/projects/'+this.project_id+'/datasets';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
    });

    var Datasets = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.id = options.id;
        },
        model: Dataset,
        url: function() {
            return '/api/projects/'+this.id+'/datasets';
        }
    });


    var Analyze = Backbone.Model.extend({
        initialize: function(attributes, options) {
            this.project_id = attributes.project_id;
        },
        url : function() {
            var base = '/api/projects/'+this.project_id+'/analysis';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
    });

    var Analyzes = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.id = options.id;
        },
        model: Analyze,
        url: function() {
            return '/api/projects/'+this.id+'/analysis';
        }
    });


    var MModel = Backbone.Model.extend({
        initialize: function(attributes, options) {
            this.project_id = attributes.project_id;
            this.analysis_id = attributes.analysis_id;
        },
        url : function() {
            var base = '/api/projects/'+this.project_id+'/analysis/'+analysis_id+'/models';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
    });

    var MModels = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.id = options.id;
            this.analysis_id = options.analysis_id;
        },
        model: MModel,
        url: function() {
            return '/api/projects/'+this.id+'/analysis/'+this.analysis_id+'/models';
        }
    });





    var Meta = Backbone.Model.extend({
        initialize: function(attributes, options) {
            this.project_id = attributes.project_id;
            this.analysis_id = attributes.analysis_id;
        },
        url : function() {
            var base = '/api/projects/'+this.project_id+'/analysis/'+this.analysis_id+'/meta';
            if (this.isNew()) return base;
            return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + this.id;
        }
    });

    var MetaData = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.id = options.id;
            this.analysis_id = options.analysis_id;
        },
        model: Meta,
        url: function() {
            return '/api/projects/'+this.id+'/analysis/'+this.analysis_id+'/meta';
        }
    });


    _.extend(datioscience.models, {
        Project: Project,
        Dataset: Dataset,
        Analyze: Analyze,
        MModel: MModel,
        Meta: Meta
    });
    _.extend(datioscience.collections, {
        Projects: Projects,
        Datasets: Datasets,
        Analyzes: Analyzes,
        MModels: MModels,
        MetaData: MetaData
    });
}(datioscience));


