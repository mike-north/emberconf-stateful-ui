import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('organizations', {path: 'orgs'});

  this.route('organization', {path: 'org/:organization_id'}, function() {
    this.route('repositories', {path: 'repos'});
    this.route('repository', {path: 'repo/:repository_id'}, function() {
      this.route('pulls', {path: 'pulls'});
      this.route('pull', {path: 'pull/:pull_id'});
    });
  });
});

export default Router;
