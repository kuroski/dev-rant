import RESTSerializer from '@ember-data/serializer/rest';
import { decamelize } from '@ember/string';

export default class ApplicationSerializer extends RESTSerializer {
  keyForAttribute(key) {
    return decamelize(key);
  }
}
