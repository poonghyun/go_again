GoAgain.Views.BusinessPreview = Backbone.View.extend({
	template: JST['business_preview'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			business: this.model
		});

		this.$el.html(renderedContent);

		return this;
	}
});