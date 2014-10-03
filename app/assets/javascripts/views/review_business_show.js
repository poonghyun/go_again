GoAgain.Views.ReviewBusinessShow = Backbone.View.extend({
	template: JST['review/review_business'],

	initialize: function() {
		this.listenTo(this.model, "sync", this.render);

		this.collection = this.model.photos();
		this.listenTo(this.collection, "add", this.render);
	},

	render: function() {
		var renderedContent = this.template({
			review: this.model
		});

		this.$el.html(renderedContent);

		return this;
	},

	events: {
		"click button.add-pictures": "addPictures",
		"click .fancybox": "fancybox"
	},

	addPictures: function (event) {
		event.preventDefault();

		var view = this;

		var review_id = $(event.currentTarget).data("review-id");

		filepicker.setKey("AcXki9SpLRNG0P2Y00ihoz");

		filepicker.pickMultiple({},
			function(Blobs) {
				_(Blobs).each(function(Blob) {
					var photo = new GoAgain.Models.Photo({
						review_id: review_id,
						fp_url: Blob.url
					});

					photo.save({},{
						success: function() {
							view.collection.add(photo);
						}
					})
				})
			}
		);
	},

	fancybox: function (event) {
		event.preventDefault();

		var url = $(event.currentTarget).attr('href');

		$.fancybox.open({
			href: url
		});
	}
});