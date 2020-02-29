import { RestSerializer } from 'ember-cli-mirage';
import { decamelize } from '@ember/string';

export default RestSerializer.extend({
  keyForAttribute(key) {
    return decamelize(key);
  }
});
