import RESTAdapter from '@ember-data/adapter/rest';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default class ApplicationAdapter extends RESTAdapter.extend(TokenAuthorizerMixin) {
  host = 'https://devrant.com/api';

  buildURL(modelName, id, snapshot, requestType, query = {}) {
    query['app'] = 3;
    return super.buildURL(modelName, id, snapshot, requestType, query);
  }
}
