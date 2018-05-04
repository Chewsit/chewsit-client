'use strict';

var app = app || {};

(function (module) {

  const resultsView = {};

  resultsView.initDisplayResults = () => {
    $('#display-results').empty();
    $('.display-results').show();
    if (app.endResultsIndex === 0) {
      $('#display-results').append('<p> No results found </p>');
    } else {
      console.log('display something with', app.restaurant.endResults)
      let template = $('#display-results-template').text()
      let theTemplate = Handlebars.compile(template)
      let context = theTemplate(JSON.stringify(app.restaurant.endResults[0]))

      $('#results-list').append(context)
    }
  };

  module.resultsView = resultsView;

})(app);
