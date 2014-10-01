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

    // $search.keyup(function(e){
    //   if(e.keyCode === 13 && $search.typeahead('val')) {
    //     // grab first suggestion's id
    //     var b_id = $('.tt-suggestion > .business-search-result').data('b-id');
    //     // look up business and create model
				// var business = GoAgain.businesses.getOrFetch(b_id);

				// var view = new GoAgain.Views.BusinessShow({
				// 	model: business
				// });
    //     // swap view for business show
    //     router._swapView(view);
    //     $search.typeahead('val', '');
    //   } else {
    //   	// select first suggestion
    //   }
    // })

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