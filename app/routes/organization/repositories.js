import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('organization');
    return org.get('repositories');
  }
});
