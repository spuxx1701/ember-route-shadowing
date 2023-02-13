import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  beforeModel() {
    console.log('index route beforeModel');
  }
}
