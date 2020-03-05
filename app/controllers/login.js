import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class LoginController extends Controller {
  @service session;
  @tracked username;
  @tracked password;

  @action
  authenticate(e) {
    e.preventDefault()
    const authenticator = 'authenticator:token';
    this.session.authenticate(authenticator, {
      username: this.username,
      password: this.password,
      app: "3",
      plat: 3
    });
  }

  get data() {
    return JSON.stringify(this.session.data.authenticated)
  }
}
