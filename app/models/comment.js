import DS from 'ember-data';

const { Model, attr, belongsTo } = DS;

export default Model.extend({
  pull: belongsTo('pull'),
  diffHunk: attr('string'),
  path: attr('string'),
  commitId: attr('string'),
  body: attr('string')
});
