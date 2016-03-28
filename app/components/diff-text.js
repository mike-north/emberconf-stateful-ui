import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const elem = this.$('pre.code')[0];
    hljs.highlightBlock(elem);
  }
});
