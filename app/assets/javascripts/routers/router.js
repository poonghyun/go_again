GoAgain.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "defaultView",
		"all": "allBusinesses",
		"cat/:category": "showCategory"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	defaultView: function() {
		var view = new GoAgain.Views.Default();

		this._swapView(view);
	},

	allBusinesses: function() {
		GoAgain.businesses.fetch();

		var view = new GoAgain.Views.AllBusinesses({
			collection: GoAgain.businesses
		});

		this._swapView(view);
	},

	showCategory: function(category) {
		
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});