$.BusinessSearch = function (el) {
  // this.$el = $(el);
  // this.$input = this.$el.find(".business-name");
  // this.$result = this.$el.find(".business-search-results");

  // this.$input.on("input", this.handleInput.bind(this));


  // var businesses = new Bloodhound({
  //   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
  //   queryTokenizer: Bloodhound.tokenizers.whitespace,
  //   limit: 50,
  //   prefetch: {
  //     url: '/api/businesses',
  //     filter: function(list) {
  //       return $.map(list, function(business) { return business.name });
  //     }
  //   }
  // });

  // businesses.initialize();

  // $('#bloodhound .typeahead').typeahead({
  //   hint: true,
  //   highlight: true
  // },
  // {
  //   name: 'businesses',
  //   displayKey: 'name',
  //   source: businesses.ttAdapter()
  // });

  var businessMatcher = function(businesses) {
    return function findMatches(q, cb) {
      var matches, substrRegex;
   
      // an array that will be populated with substring matches
      matches = [];
   
      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');
   
      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(businesses, function(i, business) {
        if (substrRegex.test(business.name)) {
          // the typeahead jQuery plugin expects suggestions to a
          // JavaScript object, refer to typeahead docs for more info
          matches.push({ value: business });
        }
      });
   
      cb(matches);
    };
  };

  $.ajax({
    url: "api/businesses",
    dataType: "json",
    method: "GET",
    success: function (results) {
      $('#typeahead-search-bar .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'results',
        displayKey: function(result){ return result.value.name; },
        source: businessMatcher(results),
        templates: {
          empty: [
            '<div class="empty-search-result">',
            'No results',
            '</div>'
          ].join('\n'),
          suggestion: Handlebars.compile('<div class="business-search-result"><a href="#/business/{{value.id}}">{{value.name}}</a></div>')
          }
        }
      )
    }
  });

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

    var $li = $("<li role='option' tab-index='0'></li>");
    $li.append($a);

    this.$result.append($li);
  }
};

$.fn.businessSearch = function () {
  return this.each(function () {
    new $.BusinessSearch(this);
  });
};