GoAgain.Views.UserShow = Backbone.CompositeView.extend({
	template: JST['user'],

	initialize: function() {
		this.collection = this.model.reviews();
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));

		this.collection.each(this.addReview.bind(this));
	},

	addReview: function (review) {
		var reviewShow = new GoAgain.Views.ReviewUserShow({
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
	},

	events: {
		"click .about-me-link": "newAboutMe"
	},

	newAboutMe: function(event) {
		event.preventDefault();

		var formView = new GoAgain.Views.AboutMeForm({
			model: this.model
		});

		$('.about-me-link').replaceWith(formView.render().$el);
	}
});