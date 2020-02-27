import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  host = 'https://devrant.com/api/devrant';

  buildURL(modelName, id, snapshot, requestType, query) {
    query['app'] = 3;
    return super.buildURL(modelName, id, snapshot, requestType, query);
  }
}
