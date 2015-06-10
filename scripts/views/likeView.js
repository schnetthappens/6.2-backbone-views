
export default Backbone.View.extend ({

  template: JST.like,

  events: {
    'click .like-btn': 'addLike',
  },

  addLike: function(e) {
    alert('hello');
    // e.preventDefault();
    // this.model.addLike();
  },


/*1. Part of putting a view into its initial state is to put its element
    into the DOM.*/

  initialize: function() {
    this.render();
    this.model.on("change:count", this.render, this);
  },


/*1. Optional: Set up any methods that need to be triggered when the
  domain object changes.*/

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    // return this;
  }

});
