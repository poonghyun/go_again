GoAgain.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"all": "businessesIndex",
		"cat/:category": "showCategory"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	home: function() {
		var view = new GoAgain.Views.Default();

		this._swapView(view);
	},

	businessesIndex: function() {
		GoAgain.businesses.fetch();

		var view = new GoAgain.Views.AllBusinesses({
			collection: GoAgain.businesses
		});

		this._swapView(view);
	},

	showCategory: function(category) {
		var catModel = new GoAgain.Models.Category({
			category: category
		});

		catModel.fetch();

		var view = new GoAgain.Views.CategoryShow({
			model: catModel
		});

		this._swapView(view);
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});