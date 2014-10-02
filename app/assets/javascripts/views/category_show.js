GoAgain.Views.CategoryShow = Backbone.CompositeView.extend({
	initialize: function (options) {
		this.category = options.category;
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "add", this.addBusiness.bind(this));

		this.collection.each(this.addBusiness.bind(this));
	},

	template: JST['category'],

	render: function () {
		var renderedContent = this.template({
			category: this.category
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	},

	addBusiness: function(business) {
		var businessPreview = new GoAgain.Views.BusinessPreview({
			model: business
		});
		this.addSubview(".business-preview-list", businessPreview);
	}
});