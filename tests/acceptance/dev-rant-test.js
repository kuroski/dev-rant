import { module, test } from 'qunit';
import { visit, currentURL, findAll, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | dev rant', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    const serverRants = this.server.createList('rant', 10);

    await visit('/');

    const rants = findAll('.message')

    assert.equal(currentURL(), '/feed');
    assert.equal(rants.length, 10);

    serverRants.forEach((rant) => {
      assert.dom('.message').containsText(rant.text);
      assert.dom('.message').containsText(rant.user_username);
    })
  });

  test('a user login', async function(assert) {
    const user = this.server.create('user');

    await visit('/login');

    await fillIn('input#username', user.username);
    await fillIn('input#password', user.password);
    await click('button');

    assert.dom('#response').containsText(user.key);
  });

  test('a user with incorrect credentials', async function(assert) {
    const user = this.server.create('user');

    await visit('/login');

    await fillIn('input#username', user.username);
    await fillIn('input#password', 'wrong-password');
    await click('button');

    assert.dom('#response').doesNotContainText(user.key);
  });
});
