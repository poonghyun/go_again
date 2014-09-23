GoAgain.Views.AllBusinesses = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},

	template: JST['all_businesses'],

	render: function () {
		var businesses = this.collection;
		var renderedContent = this.template({
			businesses: businesses
		});

		this.$el.html(renderedContent);

		return this;
	}
});