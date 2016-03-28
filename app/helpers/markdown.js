import Ember from 'ember';

export function markdown(params/*, hash*/) {
  const [content] = params;
  return new showdown.Converter().makeHtml(content);
}

export default Ember.Helper.helper(markdown);
