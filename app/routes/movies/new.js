import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
    // return Ember.$.ajax({
    //         type: 'POST',
    //         url: 'http://localhost:3000/movies',
    //         contentType: 'application/json',
    //         data: JSON.stringify({
    //           title: "Best Movie Ever",
    //           year: "2011",
    //           imdbrating: "9.5"
    //         })
    //     });
  },

  actions: {
    createMovie: function (model) {
      let movie = this.store.createRecord('movie', {
        title: model.title,
        year: model.year,
        imdbrating: model.imdbrating
      });
      movie.save();
    },

    deleteMovie: function (model){
      console.log('hello');
      console.log(model.title);
      this.store.findRecord('movie', model.id, { backgroundReload: false }).then(function(model) {
        model.deleteRecord();
        model.get('isDeleted'); // => true
        model.save(); // => DELETE to /posts/1
      });
    }
  }
});
