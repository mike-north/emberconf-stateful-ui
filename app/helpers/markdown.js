import Ember from 'ember';

export function markdown(params/*, hash*/) {
  const [markup] = params;
  return new showdown.Converter().makeHtml(markup);
}

export default Ember.Helper.helper(markdown);
