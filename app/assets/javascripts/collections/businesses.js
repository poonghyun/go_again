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
	},

	getActive: function() {
		this._active = this._active || new GoAgain.Models.Business();
		return this._active;
	},

	parse: function(response) {
		if(response.closest) {
			this.getActive().set(response.closest)
			delete response.closest;
		}

		return response.others;
	}
});

GoAgain.businesses = new GoAgain.Collections.Businesses();