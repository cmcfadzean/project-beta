import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  abv: DS.attr(),
  type: DS.attr(),
  location: DS.attr()
});
