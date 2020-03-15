import ApplicationAdapter from './application';

export default class UserAdapter extends ApplicationAdapter {
  urlForFindRecord(id, modelName, snapshot) {
    let baseUrl = this.buildURL(modelName, id, snapshot);
    return `${baseUrl}?app=3`;
  }
}
