import Ember from 'ember';

export default Ember.Controller.extend({
  diffText: `@@ -57,13 +57,13 @@
export default Ember.Mixin.create({

    previous = hasOwnProp.call(buffer, key) ? buffer[key] : current;

-    if (previous === value) {
+    if (this._compareValues(previous, value, key)) {
      return;
    }

    this.propertyWillChange(key);

-    if (current === value) {
+    if (this._compareValues(current, value, key)) {
      delete buffer[key];
      if (empty(buffer)) {
        this.set('hasBufferedChanges', false);
@@ -114,5 +114,9 @@ export default Ember.Mixin.create({
    if (empty(this.buffer)) {
      this.set('hasBufferedChanges', false);
    }
+  },
+
+  _compareValues(a, b) {
+    return a === b;
  }
});`,
  markdownMarkup: `
## Hello

* I
* Love
* Lists
`
});
