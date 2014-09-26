GoAgain.Models.User = Backbone.Model.extend({
	urlRoot: "/api/users",

	reviews: function() {
		if(!this._reviews) {
			this._reviews = new GoAgain.Collections.Reviews([], { user: this });
		}

		return this._reviews;
	},

	parse: function(response) {
		if(response.reviews) {
			this.reviews().set(response.reviews, { parse: true });
			delete response.reviews;
		}

		return response;
	}
});