GoAgain.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"all": "allBusinesses",
		"cat/:category": "categoryShow",
		"business/:id": "businessShow"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	home: function() {
		GoAgain.allReviews.fetch();
		GoAgain.businesses.fetch();

		var view = new GoAgain.Views.Default({
			collection: GoAgain.allReviews
		});

		this._swapView(view);
	},

	allBusinesses: function() {
		GoAgain.businesses.fetch();

		var view = new GoAgain.Views.AllBusinesses({
			collection: GoAgain.businesses
		});

		this._swapView(view);
	},

	categoryShow: function(category) {
		GoAgain.businesses.fetch();

		var catModel = new GoAgain.Models.Category({
			category: category
		});

		catModel.fetch();

		var view = new GoAgain.Views.CategoryShow({
			model: catModel
		});

		this._swapView(view);
	},

	businessShow: function(id) {
		var business = GoAgain.businesses.getOrFetch(id);

		var view = new GoAgain.Views.BusinessShow({
			model: business
		});

		this._swapView(view);
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});