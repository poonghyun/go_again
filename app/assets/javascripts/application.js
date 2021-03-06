// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.ui.effect-explode
//= require jquery_ujs
//= require jquery.serializejson
//= require underscore
//= require backbone
//= require bootstrap
//= require backbone.bootstrap-modal
//= require typeahead.bundle
//= require handlebars-1.0.rc.1.min
//= require jquery.fancybox.pack
//= require go_again
//= require_tree ../templates
//= require_tree ./utils
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(function() {
  $('.business-search').businessSearch();
})