import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

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

  test('a rant belongs to an author', function(assert) {
    const rant = this.owner.lookup('service:store').modelFor('rant');

    const relationship = get(rant, 'relationshipsByName').get('author');

    assert.equal(relationship.key, 'author', 'has relationship with author');
    assert.equal(
      relationship.kind,
      'belongsTo',
      'kind of relationship is belongsTo'
    );
  });
});
