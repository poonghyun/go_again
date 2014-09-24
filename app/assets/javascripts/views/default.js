GoAgain.Views.Default = Backbone.View.extend({
	template: JST['default'],

	initialize: function () {
		this.listenTo(this.collection, "sync", this.render)
	},

	render: function () {
		var renderedContent = this.template({
			reviews: this.collection
		});

		this.$el.html(renderedContent);

		return this;
	}
});