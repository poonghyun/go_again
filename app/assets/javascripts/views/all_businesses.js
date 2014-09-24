GoAgain.Views.AllBusinesses = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},

	template: JST['all_businesses'],

	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		});

		this.$el.html(renderedContent);

		return this;
	}
});