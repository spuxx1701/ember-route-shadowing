import EmberRouter from '@ember/routing/router';
import config from 'route-shadowing/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("/");
  this.route("shadow", { path: "/" });
});
