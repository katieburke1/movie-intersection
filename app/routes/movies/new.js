import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.ajax({
            type: 'POST',
            url: 'http://localhost:3000/movies',
            contentType: 'application/json',
            data: JSON.stringify({
              title: "Best Movie Ever",
              year: "2011",
              imdbrating: "9.5"
            })
        });
      }
});
