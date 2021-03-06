GoAgain.Models.User = Backbone.Model.extend({
	urlRoot: "/api/users",

	reviews: function() {
		if(!this._reviews) {
			this._reviews = new GoAgain.Collections.Reviews([], { user: this });
		}

		return this._reviews;
	},

	photos: function () {
		if(!this._photos) {
			this._photos = new GoAgain.Collections.Photos([], { user: this });
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