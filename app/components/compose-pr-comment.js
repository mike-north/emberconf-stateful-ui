import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component, inject } = Ember;

export default Component.extend({
  classNames: ['compose-pr-comment'],
  store: inject.service(),
  draft: stateFor('comment-drafts', 'pr'),
  loading: false,
  error: '',
  actions: {
    save() {
      this.set('loading', true);
      this.get('store').createRecord('comment', {
        pull: this.get('pr'),
        body: this.get('draft.body')
      }).save().then(() => {
        if (!(this.isDestroyed || this.isDestroying)) {
          this.set('draft.body', '');
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
        this.set('draft.body', '');
        this.set('loading', false);
      }
    }
  }
});
