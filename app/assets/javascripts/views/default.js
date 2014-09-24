GoAgain.Views.Default = Backbone.View.extend({
	template: JST['default'],

	initialize: function () {
		this.listenTo(this.collection, "sync", this.render)
	},

	render: function () {
		var reviews = this.collection;
		var renderedContent = this.template({
			reviews: reviews
		});

		this.$el.html(renderedContent);

		return this;
	}
});