import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  repositories: hasMany('repository'),
  name: attr('string')
});
