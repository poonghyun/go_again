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

		$search = $('#typeahead-search-bar .typeahead');
		
		var router = this;

		$search.keyup(function(e) {
			if(e.keyCode === 13) {

				var suggestions = $('.tt-suggestion').length;

				if($search.typeahead('val') && (suggestions > 0)) {
					var b_id = $('.tt-suggestion > .business-search-result').data('b-id');
					var fragmentUrl = "/business/" + b_id;
					Backbone.history.navigate(fragmentUrl, { trigger: true });

					$search.typeahead('val', '');
				}
			} else {
				// handle non-enter input

				// case for arrow keys
				// case for typing

			}
		})
	},

	home: function() {

		var view = new GoAgain.Views.Default({
			collection: GoAgain.allReviews
		});

		GoAgain.allReviews.fetch();

		this._swapView(view);
	},

	allBusinesses: function() {
		var view = new GoAgain.Views.AllBusinesses({
			collection: GoAgain.businesses
		});

		GoAgain.businesses.fetch();

		this._swapView(view);
	},

	categoryShow: function(category) {
		var categoryCollection = new GoAgain.Collections.Businesses();

		var view = new GoAgain.Views.CategoryShow({
			category: category,
			collection: categoryCollection
		})

		categoryCollection.fetch({ data: { category: category }});

		setTimeout(function() {
			this._swapView(view);
		}.bind(this), 250);
	},

	businessShow: function(id) {
		var business = GoAgain.businesses.getOrFetch(id);

		var view = new GoAgain.Views.BusinessShow({
			model: business
		});

		setTimeout(function() {
			this._swapView(view);
		}.bind(this), 250);
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