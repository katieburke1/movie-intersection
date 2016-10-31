// import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
  // Application specific overrides go here
});
