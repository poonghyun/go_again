$.BusinessSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find(".business-name");
  this.$result = this.$el.find(".business-search-results");

  this.$input.on("input", this.handleInput.bind(this));
};

$.BusinessSearch.prototype.handleInput = function (event) {
  if (this.$input.val() == "") {
    this.renderResults([]);
    return;
  }

  $.ajax({
    url: "/api/b/search",
    dataType: "json",
    method: "GET",
    data: { query: this.$input.val() },
    success: this.renderResults.bind(this)
  });
};

$.BusinessSearch.prototype.renderResults = function (results) {
  this.$result.empty();

  for (var i = 0; i < results.length; i++) {
    var result = results[i];

    var $a = $("<a>");
    $a.text(result.name);
    $a.attr("href", "#/business/" + result.id);

    var $li = $("<li>");
    $li.append($a);

    this.$result.append($li);
  }
};

$.fn.businessSearch = function () {
  return this.each(function () {
    new $.BusinessSearch(this);
  });
};