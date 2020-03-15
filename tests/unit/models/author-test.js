import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | author', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('author', {});
    assert.ok(model);
  });

  test('an author own rants', function(assert) {
    const author = this.owner.lookup('service:store').modelFor('author');

    const relationship = get(author, 'relationshipsByName').get('rants');

    assert.equal(relationship.key, 'rants', 'has relationship with rant');
    assert.equal(
      relationship.kind,
      'hasMany',
      'kind of relationship is hasMany'
    );
  });
});
