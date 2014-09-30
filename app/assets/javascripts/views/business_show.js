GoAgain.Views.BusinessShow = Backbone.CompositeView.extend({
	template: JST['business'],

	initialize: function() {
		this.collection = this.model.reviews();
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));
		this.listenTo(this.collection, "change", this.render);

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

		var bView = this;

		modal.on("ok", function() {
			var params = $("form").serializeJSON();
			// do validation
			if(false) {

			} else {
				bView.okClicked(params);
			}
		});
	},

	editReviewModal: function () {
		var bView = this;

		var review = new GoAgain.Models.Review();
		// second time around
		if(bView.current_user_review) {
			review.set(this.current_user_review);
		} else { // first time
			review = this.collection.get(bView.model.attributes.current_user_review.id);
		}

		var view = new GoAgain.Views.ReviewEdit({
			model: review,
			business_name: this.model.get('name')
		});

		var modal = new Backbone.BootstrapModal({
			content: view,
			animate: true
		}).open();

		modal.on("ok", function() {
			var params = $("form").serializeJSON();
			// do validation
			if(false) {

			} else {
				bView.okClicked(params);
			}
		});
	},

	okClicked: function (params) {
		var view = this;
		var review = new GoAgain.Models.Review(params["review"]);
		review.save({}, {
			success: function (resp) {
				// edit
				if(view.collection.get(resp.id)) {
					view.collection.get(resp.id).set(params["review"]);
				} else { // new
					view.collection.add(review);
					var $editButton = $('<button class="launch-edit-review">Edit your review</button>');
					$('.launch-new-review').replaceWith($editButton);
					view.current_user_review = review.toJSON();
				}
			}
		});
	}
});