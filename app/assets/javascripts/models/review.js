GoAgain.Models.Review = Backbone.Model.extend({
	urlRoot: "/api/reviews",

	photos: function() {
		if(!this._photos) {
			this._photos = new GoAgain.Collections.Photos([], { review: this });
		}

		return this._photos;
	},

	parse: function(response) {
		if(response.photos) {
			this.photos().set(response.photos, { parse: true });
			delete response.photos;
		}

		return response;
	}
});