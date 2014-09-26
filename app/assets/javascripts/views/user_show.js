GoAgain.Views.UserShow = Backbone.CompositeView.extend({
	template: JST['user'],

	initialize: function() {
		this.collection = this.model.reviews();
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));

		this.collection.each(this.addReview.bind(this));
	},

	addReview: function (review) {
		var reviewShow = new GoAgain.Views.ReviewShow({
			model: review
		});
		this.addSubview(".review-list", reviewShow);
	},

	render: function() {
		var renderedContent = this.template({
			user: this.model
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	}
});