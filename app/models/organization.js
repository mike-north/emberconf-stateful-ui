import DS from 'ember-data';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  repositories: hasMany('repository'),
  name: attr('string')
});
