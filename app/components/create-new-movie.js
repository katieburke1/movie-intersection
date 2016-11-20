import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMovie: function (model) {
          console.log("Hello!");
          console.log(model.title);
          this.sendAction('createMovie', model);
        },
    deleteMovie: function (model) {
      this.sendAction('deleteMovie', model);
    }
  }
});
