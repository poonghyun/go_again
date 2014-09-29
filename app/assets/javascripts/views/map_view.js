GoAgain.Views.MapView = Backbone.View.extend({
	template: JST['map_view'],

	initialize: function (options) {
		this.listenTo(this.collection, "sync", this.addMarkers);

	  this.mapOptions = {
	    zoom: 15,
	    center: new google.maps.LatLng(37.781014,-122.41142)
	  };

		this.markers = [];
	},

	render: function () {
		var renderedContent = this.template();

		this.$el.html(renderedContent);
    
		this.initializeMap();

		var view = this;
		setTimeout(function () {
		  this.debouncedFindBusinesses(this.map.getBounds(), new google.maps.LatLng(37.781014,-122.41142))();
		}.bind(this), 100)

		return this;
	},

	debouncedFindBusinesses: function (bounds, center) {
    return _.debounce(this.findBusinesses.bind(this, bounds, center), 100);
	},

	bindListeners: function() {
		  // for(var i = 0; i < this.markers.length; i++) {
				// 	google.maps.event.addListener(this.markers[i], "click", function(marker) {
		  // 		this.map.panTo(marker.latLng);
		  // 		this.findBusinesses(this.map.getBounds(), this.map.getCenter());
		  // 	}

		console.log('binding listeners');

		var counter = 0;

		google.maps.event.addListener(this.map, 'bounds_changed', function() {
			if(counter % 50 === 0) {
				counter++;
				return this.findBusinesses(this.map.getBounds(), this.map.getCenter());
			}
	  	// return this.findBusinesses(this.map.getBounds(), this.map.getCenter());
	  }.bind(this));
	},

	initializeMap: function () {
	  this.map = window.map || new google.maps.Map(this.$('.map')[0],
    this.mapOptions);
	},

	addMarkers: function () {
		console.log('adding markers');
	  for (var i = 0; i < this.markers.length; i++) {
	    this.markers[i].setMap(null);
	    console.log('nilling marker')
	  }
		this.markers = [];

  	// place some markers based on the response
  	var closest = this.model;
  	var others = this.collection;

  	// place closest marker
	  var closestMarker = new google.maps.Marker({
	    position: new google.maps.LatLng(closest.get('x_coord'), closest.get('y_coord')),
	    map: this.map,
	    title: closest.get('name'),
	    icon: 'http://maps.google.com/mapfiles/ms/micons/yellow-dot.png'
	    // animation: google.maps.Animation.DROP
	  });

	  this.markers.push(closestMarker);

	  // place other markers
	 	this.collection.each(function(other) {
	  	var otherMarker = new google.maps.Marker({
	  		position: new google.maps.LatLng(other.get('x_coord'), other.get('y_coord')),
	  		map: this.map,
	  		title: other.get('name'),
	  		icon: 'http://maps.google.com/mapfiles/ms/micons/red-dot.png'
	  	});
	  	this.markers.push(otherMarker);
	  }, this);

	  // add listeners to markers
	  // for(var i = 0; i < this.markers.length; i++) {
	  // 	google.maps.event.addListener(this.markers[i], "click", function(marker) {
	  // 		this.map.panTo(marker.latLng);
	  // 		this.findBusinesses(this.map.getBounds(), this.map.getCenter());
	  // 	})
	  // }

	  // populate preview
	  // var model = GoAgain.businesses.getOrFetch(closest.id);
	  // $(".browse-business").html(new GoAgain.Views.BusinessMapShow({
	  // 	model: this.model
	  // }).render().$el);

	  // google.maps.event.trigger(this.map, 'resize');
	},

	findBusinesses: function(bounds, center) {
		var xRange = bounds.Ea.k + "," + bounds.Ea.j;
		var yRange = bounds.ua.k + "," + bounds.ua.j;
		var centerString = center.k + "," + center.B;
    this.collection.fetch({data: { query: [xRange, yRange, centerString] }}).then(function() {
			this.bindListeners();
			google.maps.event.trigger(this.map, 'resize');
    }.bind(this));
	}
});