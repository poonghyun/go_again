GoAgain.Collections.Businesses = Backbone.Collection.extend({
	url: "/api/businesses",
	model: GoAgain.Models.Business
});

GoAgain.businesses = new GoAgain.Collections.Businesses();