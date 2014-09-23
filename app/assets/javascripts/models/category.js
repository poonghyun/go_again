GoAgain.Models.Category = Backbone.Model.extend({
	urlRoot: function () {
		return "/api/cat/" + this.category;
	},

	initialize: function(options) {
		this.category = options.category;
	}
});