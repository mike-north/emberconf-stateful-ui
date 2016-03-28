import Ember from 'ember';

const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  classNames: ['compose-pr-comment'],
  init() {
    this._super(...arguments);
    this.set('model', this.get('store').createRecord('comment', {
      pull: this.get('pr'),
      body: 'abc',
      path: '',
      diffHunk: '',
      commitId: ''
    }));
    debugger;
  },
  actions: {
    cancel() {

    },
    submit(){
      this.get('model').save();
    }
  }
});
