GoAgain.Routers.Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"all": "allBusinesses",
		"cat/:category": "categoryShow",
		"business/:id": "businessShow",
		"user/:id": "userShow"
	},

	initialize: function(options) {
		this.$rootEl = options.$rootEl;
	},

	home: function() {
		var view = new GoAgain.Views.Default({
			collection: GoAgain.allReviews
		});

		GoAgain.allReviews.fetch();

		this._swapView(view);

		MapBrowse.loadMap();
	},

	allBusinesses: function() {
		var view = new GoAgain.Views.AllBusinesses({
			collection: GoAgain.businesses
		});

		GoAgain.businesses.fetch();

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

	userShow: function(id) {
		var user = new GoAgain.Models.User({ id: id });

		var view = new GoAgain.Views.UserShow({
			model: user
		});

		user.fetch();

		this._swapView(view);
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});