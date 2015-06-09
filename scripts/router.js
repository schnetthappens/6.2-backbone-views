
var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'loading': 'loading'
  },

  index: function() {
    $('.app').html(JST.like());
  },

  loading: function() {
    $('.app').html(JST.loading());
  }
});

var router = new Router();

export default router;
