import DS from 'ember-data';

const { Model, attr, belongsTo, hasMany } = DS;

export default Model.extend({
  organization: belongsTo('organization'),
  pulls: hasMany('pull'),
  name: attr('string')
});
