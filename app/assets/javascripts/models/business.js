GoAgain.Models.Business = Backbone.Model.extend({
	urlRoot: "/api/businesses",

	reviews: function() {
		if(!this._reviews) {
			this._reviews = new GoAgain.Collections.Reviews([], { business: this });
		}

		return this._reviews;
	},

	photos: function () {
		if(!this._photos) {
			this._photos = new GoAgain.Collections.Photos([], { business: this });
		}

		return this._photos;
	},

	parse: function(response) {
		if(response.reviews) {
			this.reviews().set(response.reviews, { parse: true });
			delete response.reviews;
		}

		if(response.photos) {
			this.photos().set(response.photos, { parse: true });
			delete response.photos;
		}

		return response;
	}
});