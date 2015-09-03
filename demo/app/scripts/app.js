'use strict';

// The namespace of this angular app
var APP_NAME = 'demoApp';

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
  .config(config);
