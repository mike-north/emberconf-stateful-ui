import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let repo = this.modelFor('organization.repository');
    return repo.get('pulls');
  }
});
