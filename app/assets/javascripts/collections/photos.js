GoAgain.Collections.Photos = Backbone.Collection.extend({
	url: "/api/photos",
	model: GoAgain.Models.Photo,

	initialize: function (model, options) {
		// this.review = options.review;
	}
});