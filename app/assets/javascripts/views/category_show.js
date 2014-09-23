GoAgain.Views.CategoryShow = Backbone.View.extend({
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},

	template: JST['category'],

	render: function () {
		// need to clone so as not to affect model
		var results = JSON.parse(JSON.stringify(this.model))
		var cat = this.model.category;
		delete results.category;
		
		var renderedContent = this.template({
			category: cat,
			businesses: results
		});

		this.$el.html(renderedContent);

		return this;
	}
});