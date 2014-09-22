window.GoAgain = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	var $main = $('#main');

  	new GoAgain.Routers.Router({
  		$rootEl: $main
  	});
  	
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  GoAgain.initialize();
});
