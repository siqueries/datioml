(function(datioscience) {

    emptyDragView = Backbone.View.extend({
        events: {
        },
        tagName: "div",
        className: "item",
        id: "subnav-report",
        initialize: function() {
            _.bindAll(this, 'render');
            this.left = this.options.left;
            this.top = this.options.top;
            this.tmpId = this.options.tmpId;
        },
        render: function() {
            $(this.el).attr("id", this.tmpId).html(Handlebars.templates.empty_drag()).css({"top": this.top, "left": this.left});
            return this;
        }
    });

    inputView = Backbone.View.extend({
        events: {
            'click .option': 'option'
        },
        tagName: "div",
        className: "item",
        id: "subnav-report",
        initialize: function() {
            _.bindAll(this, 'render');
            this.left = this.options.left;
            this.top = this.options.top;
            this.tmpId = this.options.tmpId;
        },
        render: function() {
            $(this.el).attr("id", this.tmpId).html(Handlebars.templates.input()).css({"top": this.top, "left": this.left});
            return this;
        },
        option: function(){
            if (datioscience.flag == 1) {
                datioscience.flag = 0;
                datioscience.openId = this.tmpId;
                $('#BusyBox').stop(true).animate({ 'margin-bottom': 0, 'opacity': '1' }, { queue: false, duration: 300 });
            }
            else {
                datioscience.openId = "";
                $('#BusyBox').stop(true).animate({ 'margin-bottom': -350, 'opacity': '1' }, { queue: false, duration: 300 });
                datioscience.flag = 1;
            }
        }
    });

    aggrView = Backbone.View.extend({
        events: {
        },
        tagName: "div",
        className: "item",
        id: "subnav-report",
        initialize: function() {
            _.bindAll(this, 'render');
            this.left = this.options.left;
            this.top = this.options.top;
            this.tmpId = this.options.tmpId;
        },
        render: function() {
            $(this.el).attr("id", this.tmpId).html(Handlebars.templates.aggr()).css({"top": this.top, "left": this.left});
            return this;
        }
    });


_.extend(datioscience.views, {
        inputView: inputView,
        aggrView: aggrView,
        emptyDragView: emptyDragView
    });
}(datioscience));