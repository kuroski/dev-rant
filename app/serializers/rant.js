import RESTSerializer, { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class RantSerializer extends RESTSerializer.extend(EmbeddedRecordsMixin) {
  attrs = {
    author: { embedded: 'always' }
  };

  normalize(modelClass, resourceHash) {
    return super.normalize(modelClass, {
      ...resourceHash,
      author: {
          id: resourceHash.user_id,
          avatar: `https://avatars.devrant.com/${resourceHash.user_avatar.i}`,
          username: resourceHash.user_username,
      }
    })
  }
}
