Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});

Handlebars.registerHelper('makeid', function(opts) {
    return datioscience.makeid();
});
window.datioscience = _.extend({
    views: {},
    models: {},
    collections: {},
    flag: 1,
    openId: "",
    workflow: {
        "preprocess": [],
        "algorithm": {},
        "algorithm_type": "",
        "target-variable-index": "",
        "newToOldIndicesList": [],
        "parameters": {},
        "model_name": ""
    },
    makeid: function()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 70; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    },
    utils: {
        rand: function() {
            return Math.random().toString(36).substr(2); // remove `0.`
        },

        token: function() {
            return datioscience.utils.rand() + datioscience.utils.rand(); // to make it longer
        },

        data_counter: function(id){
            $.ajax({
                url: "/api/counter/data?productId="+id,
                type: 'GET',
                contentType: 'application/json'
            }).done(function(resp, textStatus, xhr) {
                $("#datasets-counter").empty().html(resp)
                //console.log(resp);
            }).fail(function() {
            });
        },

        analysis_counter: function(id){
            $.ajax({
                url: "/api/counter/analysis?productId="+id,
                type: 'GET',
                contentType: 'application/json'
            }).done(function(resp, textStatus, xhr) {
                $("#analysis-counter").empty().html(resp)
                //console.log(resp);
            }).fail(function() {
            });
        }
    }

});