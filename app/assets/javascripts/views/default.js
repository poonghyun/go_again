GoAgain.Views.Default = Backbone.View.extend({
	template: JST['default'],

	render: function () {
		var renderedContent = this.template();

		this.$el.html(renderedContent);

		return this;
	}
});