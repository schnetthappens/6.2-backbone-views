
var LikeModel = Backbone.Model.extend({
  defaults: {
    count: 0,
  },

  addLike: function() {
    // e.preventDefault();
    alert('hello');
  }
});

export default LikeModel;
