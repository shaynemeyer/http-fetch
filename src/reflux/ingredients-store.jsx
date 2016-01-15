var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {

  },
  postIngredient: function(text) {
    // Posted ingredient to the server
    // now we got a successful callback

    this.trigger('change', this.ingredients);
  },
  fireUpdate: function() {

  }
});

module.exports = IngredientStore;
