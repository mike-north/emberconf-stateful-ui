/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Import Highlight.js
  app.import(app.bowerDirectory + "/highlightjs/highlight.pack.min.js");

  app.import(app.bowerDirectory + "/highlightjs/styles/github-gist.css");
  app.import(app.bowerDirectory + "/highlightjs/styles/hybrid.css");

  // Import Showdown
  app.import(app.bowerDirectory + '/showdown/dist/showdown.js');

  return app.toTree();
};
