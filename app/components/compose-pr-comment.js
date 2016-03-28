import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  classNames: ['compose-pr-comment'],
  saving: false,
  model: stateFor('draft-pull-comment', 'pr'),
  init(){
    this._super(...arguments);
    this.set('errors', []);
  },
  actions: {
    cancel() {
      this.set('model.body', '');
      this.set('saving', false);
      this.set('errors', []);
    },
    submit(){
      const body = this.get('model.body');
      const attributes = {
        body,
        pull: this.get('pr')
      };
      this.set('saving', true);
      this.get('store').createRecord('comment', attributes).save().then(() =>{
        if (!this.isDestroyed && !this.isDestroying) {
          this.set('saving', false);
          this.set('errors', []);
          this.set('model.body', '');
        }
      }).catch((err) => {
        if (!this.isDestroyed && !this.isDestroying) {
          this.set('errors', err.errors);
          this.set('saving', false);
        }
      });
    }
  }
});
