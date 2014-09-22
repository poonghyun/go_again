GoAgain.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "defaultView",
		"cat/:category": "showCategory"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	defaultView: function() {

	},

	showCategory: function(category) {
		
	}
});