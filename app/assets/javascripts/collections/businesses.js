GoAgain.Collections.Businesses = Backbone.Collection.extend({
	url: "/api/businesses",
	model: GoAgain.Models.Business,

	getOrFetch: function(id) {
		var business = this.get(id);

		if(!business) {
			business = new GoAgain.Models.Business({ id: id });
			business.fetch({
				success: function () {
					this.add(business);
				}.bind(this)
			});
		} else {
			business.fetch();
		}

		return business;
	}
});

GoAgain.businesses = new GoAgain.Collections.Businesses();