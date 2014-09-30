GoAgain.Views.AboutMeForm = Backbone.View.extend({
	template: JST['about_me'],

	render: function () {
		var renderedContent = this.template();

		this.$el.html(renderedContent);

		return this;
	},

	events: {
		"submit form": "submit"
	},

	submit: function(event) {
		event.preventDefault();

		if($(event.target).find('textarea').val()) {
			var view = this;
			var params = $(event.currentTarget).serializeJSON();

			var update = new GoAgain.Models.User();
			update.save({
				id: view.model.id,
				about_me: params.about_me
			},
			{
				success: function (user) {
					var $aboutMe = $('<p>').text(user.attributes.about_me);
					$('.user-left').append($aboutMe);
					view.remove();
				}
			})
		} else {
			this.$('.form-group').addClass('has-error');
		}
	}
});