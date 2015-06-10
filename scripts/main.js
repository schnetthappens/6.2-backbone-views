import router from './router';
import addLikeView from './views/likeView';
import LikeModel from './models/like';


(function(){
  'use strict';

  $(document).ready(function(){
    Backbone.history.start();

    var like = new LikeModel();

    var likeView = new addLikeView({model: like});

  });
})();

// create a model
// create a View
// send the model to the view via a constructor function
