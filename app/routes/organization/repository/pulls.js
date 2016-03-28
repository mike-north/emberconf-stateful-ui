import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    state: {
      refreshModel: true
    }
  },
  model(params /*, transition*/) {
    let repo = this.modelFor('organization.repository');
    let args = {
      repository_id: repo.get('id')
    };
    if (params.state && !params.state === 'all') {
      args.state = params.state;
    }
    return this.store.query('pull', args);
  }
});
