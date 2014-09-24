GoAgain.Collections.Reviews = Backbone.Collection.extend({
	url: "/api/reviews",
	model: GoAgain.Models.Review,

	initialize: function (model, options) {
		this.business = options.business;
	}
});

// this is a little hacky
GoAgain.allReviews = new GoAgain.Collections.Reviews([], { business: "all" });