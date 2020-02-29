import RESTSerializer from '@ember-data/serializer/rest';

export default class RantSerializer extends RESTSerializer {
  normalize(modelClass, resourceHash) {
    return super.normalize(modelClass, {
      ...resourceHash,
      avatar: `https://avatars.devrant.com/${resourceHash.user_avatar.i}`,
      author: resourceHash.user_username
    })
  }
}
