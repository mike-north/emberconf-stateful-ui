import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    state: {
      refreshModel: true
    }
  },
  model(params, transition) {
    let repo = this.modelFor('organization.repository');
    let queryOptions = {
      repository_id: repo.id,
    };
    if (params.state) {
      queryOptions.state = params.state;
    }
    return this.store.query('pull', queryOptions);
  }
});
