import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | rant', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('rant', {
      text: 'A different error message! Finally some progress!'
    });

    assert.ok(model);
    assert.equal(model.text, 'A different error message! Finally some progress!');
  });
});
