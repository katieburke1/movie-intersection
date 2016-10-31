import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr(),
  year: attr(),
  imdbrating: attr()
});
