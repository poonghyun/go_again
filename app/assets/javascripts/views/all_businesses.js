GoAgain.Views.AllBusinesses = Backbone.CompositeView.extend({
	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "add", this.addBusiness.bind(this));

		this.collection.each(this.addBusiness.bind(this));
	},

	template: JST['all_businesses'],

	addBusiness: function(business) {
		var businessPreview = new GoAgain.Views.BusinessPreview({
			model: business
		});
		this.addSubview(".business-preview-list", businessPreview);
	},

	render: function () {
		var renderedContent = this.template({
			businesses: this.collection
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	}
});