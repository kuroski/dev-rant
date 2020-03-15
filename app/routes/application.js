/* eslint-disable no-console */
import Route from "@ember/routing/route";
import ApplicationRouteMixin from "ember-simple-auth/mixins/application-route-mixin";
import { inject as service } from "@ember/service";

export default class ApplicationRoute extends Route.extend(
  ApplicationRouteMixin
) {
  @service currentUser;
  @service session;

  beforeModel() {
    return this._loadCurrentUser();
  }

  async sessionAuthenticated() {
    await this._loadCurrentUser();
    super.sessionAuthenticated(...arguments);
  }

  _loadCurrentUser() {
    return this.currentUser.load().catch(() => this.session.invalidate());
  }
}
