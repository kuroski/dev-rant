import Route from '@ember/routing/route';

export default class FeedRoute extends Route {
  model() {
    return this.store.query('rant', {
        sort: 'top'
    })
  }
}
