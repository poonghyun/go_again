GoAgain.Views.ReviewShow = Backbone.View.extend({
	template: JST['review/review'],

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