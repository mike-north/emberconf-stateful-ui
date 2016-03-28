import Ember from 'ember';

export function markdown(params/*, hash*/) {
  const [content] = params;
  const html = new showdown.Converter().makeHtml(content);
  return new Ember.Handlebars.SafeString(html);
}

export default Ember.Helper.helper(markdown);
