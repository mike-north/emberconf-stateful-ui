import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  repository: belongsTo('repository'),
  title: attr('string'),
  diffHunk: attr('string'),
  path: attr('string'),
  commitId: attr('string'),
  state: attr('string')
});
