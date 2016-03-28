import DS from 'ember-data';

const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  repository: belongsTo('repository'),
  comments: hasMany('comment'),
  title: attr('string'),
  body: attr('string'),
  state: attr('string')
});
