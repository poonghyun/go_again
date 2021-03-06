// MapBrowse = {}

// MapBrowse.initialize = function() {
// 	console.log("initialize runs");
// 	MapBrowse.google = google;
// 	MapBrowse.reload();
	
// }

// MapBrowse.reload = function() {
// 	console.log("reload runs");
// 	if(MapBrowse.google) {

// 	  var mapOptions = {
// 	    zoom: 15,
// 	    center: new MapBrowse.google.maps.LatLng(37.781014,-122.41142)
// 	  };

// 	  var map = MapBrowse.map = new MapBrowse.google.maps.Map(document.getElementById('map-browser'),
// 	      mapOptions);

// 		var markers = [];

// 	  function findBusinesses(bounds, center) {
// 			var xRange = bounds.Ea.k + "," + bounds.Ea.j;
// 			var yRange = bounds.ua.k + "," + bounds.ua.j;
// 			var centerString = center.k + "," + center.B;

// 		  $.ajax({
// 		    url: "/api/b/range",
// 		    dataType: "json",
// 		    method: "GET",
// 		    data: { query: [xRange, yRange, centerString] },
// 		    success: function(response) {
// 		  	  for (var i = 0; i < markers.length; i++) {
// 				    markers[i].setMap(null);
// 				  }
// 					markers = [];

// 		    	// place some markers based on the response
// 		    	var closest = response.closest;
// 		    	var others = response.others;

// 		    	// place closest marker
// 	    	  var closestMarker = new MapBrowse.google.maps.Marker({
// 				    position: new MapBrowse.google.maps.LatLng(closest.x_coord, closest.y_coord),
// 				    map: map,
// 				    title: closest.name,
// 				    icon: 'http://maps.google.com/mapfiles/ms/micons/yellow-dot.png'
// 				    // animation: google.maps.Animation.DROP
// 				  });

// 				  markers.push(closestMarker);

// 				  // place other markers
// 				 	_(others).each(function(other) {
// 				  	var otherMarker = new MapBrowse.google.maps.Marker({
// 				  		position: new MapBrowse.google.maps.LatLng(other.x_coord, other.y_coord),
// 				  		map: map,
// 				  		title: other.name,
// 				  		icon: 'http://maps.google.com/mapfiles/ms/micons/red-dot.png'
// 				  	});
// 				  	markers.push(otherMarker);
// 				  });

// 				  // add listeners to markers
// 				  for(var i = 0; i < markers.length; i++) {
// 				  	MapBrowse.google.maps.event.addListener(markers[i], "click", function(marker) {
// 				  		map.panTo(marker.latLng);
// 				  		findBusinesses(map.getBounds(), map.getCenter());
// 				  	})
// 				  }

// 				  // populate preview
// 				  var model = GoAgain.businesses.getOrFetch(closest.id);
// 				  $(".browse-business").html(new GoAgain.Views.BusinessMapShow({
// 				  	model: model
// 				  }).render().$el);

// 				  MapBrowse.google.maps.event.trigger(MapBrowse.map, 'resize');

// 				  console.log("success")
// 		    }
// 		  });
// 		}

// 	  var counter = 0;

// 	  MapBrowse.google.maps.event.addListener(map, 'bounds_changed', function() {
// 	    //counter to keep it from getting ridiculous with the requests
// 	    if(counter % 50 === 0) {
// 		  	findBusinesses(map.getBounds(), map.getCenter());
// 		  }
// 		  counter++;
// 	  });
// 	}
// }

// MapBrowse.loadMap = function() {
// 	// $('body > script').remove();

// 	var $script = $('<script>').attr("type", "text/javascript").attr("src", "https://maps.googleapis.com/maps/api/js?v=3.exp&callback=MapBrowse.initialize");

//   $('body').append($script);
// }