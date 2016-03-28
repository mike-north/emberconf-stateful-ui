import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['pr-component'],
  body: `This is the body of my pull request. It should be rendered in markdown so that \`this code\` and a

## Heading

looks really sweet!`,
diffText: `@@ -4,6 +4,8 @@
     "ember": "~2.4.3",
     "ember-cli-shims": "0.1.1",
     "ember-cli-test-loader": "0.2.2",
-    "ember-qunit-notifications": "0.1.0"
+    "ember-qunit-notifications": "0.1.0",
+    "highlightjs": "^9.2.0",
+    "showdown": "^1.3.0"
   }
 }`
});
