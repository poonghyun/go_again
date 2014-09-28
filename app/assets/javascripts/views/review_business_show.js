GoAgain.Views.ReviewBusinessShow = Backbone.View.extend({
	template: JST['review_business'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			review: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}
});