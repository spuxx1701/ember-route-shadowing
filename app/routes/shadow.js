import Route from '@ember/routing/route';

export default class ShadowRoute extends Route {
  beforeModel() {
    console.log('shadow route beforeModel');
  }
}
