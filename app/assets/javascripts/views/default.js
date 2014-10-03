GoAgain.Views.Default = Backbone.CompositeView.extend({
	template: JST['default'],

	initialize: function (options) {
		this.listenTo(this.collection, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));

		this.collection.each(this.addReview.bind(this));

		var mapView = new GoAgain.Views.MapView({
			collection: GoAgain.businesses,
			model: GoAgain.businesses.getActive()
		});

		this.addSubview("#map-browser", mapView);
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
		"click .get-more-reviews": "getMoreReviews",
		"click .link-span": "explode"
	},

	explode: function (event) {
		$(event.target).parent().parent().toggle("explode", { pieces: 49 });
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
	    	if(view.count === 5) {
	    		view.$(".get-more-reviews").remove();
	    	}

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