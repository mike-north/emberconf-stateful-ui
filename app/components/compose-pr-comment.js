import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { inject } = Ember;

export default Ember.Component.extend({
  store: inject.service(),
  classNames: ['compose-pr-comment'],
  saving: false,
  model: stateFor('draft-pull-comment', 'pr'),
  actions: {
    cancel() {
      this.set('model.body', '');
    },
    submit(){
      const body = this.get('model.body');
      const attributes = {
        body,
        pull: this.get('pr')
      };
      this.set('saving', true);
      this.get('store').createRecord('comment', attributes).save().then(() =>{
        this.set('saving', false);
        this.set('model.body', '');
      });
    }
  }
});
