import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class LoginController extends Controller {
  @service session;
  @service router;
  @tracked username;
  @tracked password;

  @action
  async authenticate(e) {
    e.preventDefault()
    const authenticator = 'authenticator:token';

    try {
      await this.session.authenticate(authenticator, {
        username: this.username,
        password: this.password,
        app: "3",
        plat: 3
      });

      this.router.transitionTo('feed');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  get data() {
    return JSON.stringify(this.session.data.authenticated)
  }
}
