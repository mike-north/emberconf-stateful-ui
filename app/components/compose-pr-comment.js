import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  classNames: ['compose-pr-comment'],
  store: inject.service(),
  body: '',
  actions: {
    save() {
      this.get('store').createRecord('comment', {
        pull: this.get('pr'),
        body: this.get('body')
      }).save().then(() => {
        this.set('body', '');
      });
    },
    cancel() {
      this.set('body', '');
    }
  }
});
