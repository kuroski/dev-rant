import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(
      store,
      primaryModelClass,
      { users: {
        ...payload.profile,
        id
       }
      },
      id,
      requestType
    )
  }

  normalize(modelClass, resourceHash) {
    return super.normalize(modelClass, {
      id: resourceHash.id,
      username: resourceHash.username,
      score: resourceHash.score
    });
  }
}
