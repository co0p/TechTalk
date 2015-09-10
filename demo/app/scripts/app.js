'use strict';

// The namespace of this angular app
var APP_NAME = 'demoApp';

// backend url
var URL = 'http://localhost:3000/scores';

// Angular modules to be loaded
var modules = ['ngResource', 'ngRoute'];

// configuration of routes and app specifics
function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });
}

angular
  .module(APP_NAME, modules)
  .value('_', window._)
  .constant('URL', URL)
  .config(config);
