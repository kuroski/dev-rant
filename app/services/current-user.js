import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class CurrentUserService extends Service {
  @service session;
  @service store;

  load() {
    if(this.session.isAuthenticated) {
      return this
        .store
        .findRecord('user', this.session.data.authenticated.auth_token.user_id)
        .then((user) => this.session.set('data.user', user));
    }

    return Promise.resolve();
  }
}
