import RESTSerializer from '@ember-data/serializer/rest';

export default class RantSerializer extends RESTSerializer {
  normalize(modelClass, resourceHash) {
    return super.normalize(modelClass, {
      ...resourceHash,
      author: resourceHash.user_username
    })
  }
}
