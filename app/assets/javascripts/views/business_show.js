GoAgain.Views.BusinessShow = Backbone.CompositeView.extend({
	template: JST['business'],

	initialize: function() {
		this.collection = this.model.reviews();
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));

		this.collection.each(this.addReview.bind(this));
	},

	addReview: function (review) {
		var reviewShow = new GoAgain.Views.ReviewBusinessShow({
			model: review
		});
		this.addSubview(".review-list", reviewShow);
	},

	render: function() {
		var renderedContent = this.template({
			business: this.model
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	},

	events: {
		"click .launch-new-review": "newReviewModal",
		"click .launch-edit-review": "editReviewModal"
	},

	newReviewModal: function () {
		var view = new GoAgain.Views.ReviewNew({ model: this.model });

		var modal = new Backbone.BootstrapModal({
			content: view,
			animate: true
		}).open();

		modal.on("ok", this.okClicked.bind(this));
	},

	editReviewModal: function () {
		var view = new GoAgain.Views.ReviewEdit({
			model: this.model.attributes.current_user_review,
			business_name: this.model.get('name')
		});

		var modal = new Backbone.BootstrapModal({
			content: view,
			animate: true
		}).open();

		modal.on("ok", this.okClicked.bind(this));
	},

	okClicked: function (modal) {
		var view = this;
		var params = $("form").serializeJSON();
		var review = new GoAgain.Models.Review(params["review"]);
		review.save({}, {
			success: function (resp) {
				if(view.collection.get(resp.id)) {
					// replace
				} else {
					view.collection.add(review);
				}
			}
		});
	}
});