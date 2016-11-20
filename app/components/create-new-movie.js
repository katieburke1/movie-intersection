import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMovie: function (model) {
      console.log("Hello!");
      console.log(model.title);
      this.sendAction('createMovie', model);
          // Clear each input field
      this.set('model.title', null);
      this.set('model.year', null);
      this.set('model.imdbrating', null);
    },

    deleteMovie: function (model) {
      this.sendAction('deleteMovie', model);
    }
  }
});
