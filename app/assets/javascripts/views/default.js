GoAgain.Views.Default = Backbone.CompositeView.extend({
	template: JST['default'],

	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));

		this.collection.each(this.addReview.bind(this));
	},

	addReview: function (review) {
		var reviewShow = new GoAgain.Views.ReviewShow({
			model: review
		});
		this.addSubview(".review-list", reviewShow);
	},

	render: function () {
		var renderedContent = this.template({
			reviews: this.collection
		});

		this.$el.html(renderedContent);
		this.attachSubviews();

		return this;
	},

	events: {
		"click .get-more-reviews": "getMoreReviews"
	},

	getMoreReviews: function(event) {
		event.preventDefault();

	  var url = "/api/reviews?page=" + this.count;
	  this.count++;

	  var view = this;

	  var options = {
	    url: url,
	    dataType: "json",
	    success: function (data) {
	      _(data).each(function(review){
	      	var reviewModel = new GoAgain.Models.Review(review);
	      	view.collection.add(reviewModel);
	      });
	    }
	  };

	  $.ajax(options);
	},

	count: 1
});