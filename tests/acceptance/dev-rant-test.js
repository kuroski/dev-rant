import { module, test } from 'qunit';
import { visit, currentURL, findAll, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | dev rant', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {
    this.server.createList('rant', 10);
    const serverRants = this.server.schema.rants.all();

    await visit('/');

    const rants = findAll('.message')

    assert.equal(currentURL(), '/feed');
    assert.equal(rants.length, 10);

    serverRants.models.forEach((rant) => {
      assert.dom('.message').containsText(rant.text);
      assert.dom('.message').containsText(rant.user_username);
    })
  });

  test('user login', async function(assert) {
    await visit('/login');

    await fillIn('input#username', 'my-username@domain.com');
    await fillIn('input#password', '12345678');
    await click('button');

    assert.dom('#response').containsText('p5kkUQEAvWSsPkQHExyHSLohoMEinJrXG9jiBCaN');
  });
});
