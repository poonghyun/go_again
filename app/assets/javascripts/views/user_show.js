GoAgain.Views.UserShow = Backbone.CompositeView.extend({
	template: JST['user/user'],

	initialize: function() {
		this.collection = this.model.reviews();
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.collection, "add", this.addReview.bind(this));
		this.listenTo(this.collection, "change", this.render);

		this.photos = this.model.photos();
		// may need changing
		// this.listenTo(this.photos, "add", this.render)

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
		"click .about-me-link": "newAboutMe",
		"click .avatar-container a": "uploadAvatar"
	},

	newAboutMe: function(event) {
		event.preventDefault();

		var formView = new GoAgain.Views.AboutMeForm({
			model: this.model
		});

		$('.about-me-link').replaceWith(formView.render().$el);
	},

	uploadAvatar: function(event) {
		event.preventDefault();

		var model = this.model

		filepicker.setKey("AcXki9SpLRNG0P2Y00ihoz");

		filepicker.pick(
		  {
		    mimetypes: ['image/*', 'text/plain'],
		    container: 'window',
		    services:['COMPUTER', 'FACEBOOK', 'GMAIL'],
		  },
		  function(Blob){
		  	model.set({ fp_url: Blob.url });
		  	model.save({},{
		  		success: function () {
		  			var newAvatar = '<img src="' + Blob.url + '" class="avatar">';
		  			$('.avatar').replaceWith(newAvatar);
		  		}
		  	});
		  }
		);
		
	}
});