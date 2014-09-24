GoAgain.Collections.Reviews = Backbone.Collection.extend({
	url: "/api/reviews",
	model: GoAgain.Models.Review
});

GoAgain.reviews = new GoAgain.Collections.Reviews();