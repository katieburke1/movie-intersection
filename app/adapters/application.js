// import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
  // host: 'http://www.movieintersection.com/api'
  // Application specific overrides go here
});
