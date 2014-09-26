GoAgain.Views.ReviewNew = Backbone.View.extend({
	template: JST['review_new'],

	render: function () {
		var renderedContent = this.template({
			business: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}
});