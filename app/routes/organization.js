import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('organization', params.organization_id);
  }
});
