import Ember from 'ember';

const { Component, inject } = Ember;

export default Component.extend({
  classNames: ['compose-pr-comment'],
  store: inject.service(),
  body: '',
  loading: false,
  error: '',
  actions: {
    save() {
      this.set('loading', true);
      this.get('store').createRecord('comment', {
        pull: this.get('pr'),
        body: this.get('body')
      }).save().then(() => {
        if (!(this.isDestroyed || this.isDestroying)) {
          this.set('body', '');
        }
      }).catch((errInfo) => {
        let errString = errInfo.errors
          .map((err) => err.detail)
          .join(', ');
        if (!(this.isDestroyed || this.isDestroying)) {
          this.set('error', errString);
        }
      }).finally(() => {
        if (!(this.isDestroyed || this.isDestroying)) {
          this.set('loading', false);
        }
      });
    },
    cancel() {
      if (!(this.isDestroyed || this.isDestroying)) {
        this.set('body', '');
        this.set('loading', false);
      }
    }
  }
});
