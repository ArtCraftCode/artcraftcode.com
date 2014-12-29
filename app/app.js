'use strict';

var App = angular.module('app',
  [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services',
    'partials'
  ]
);

App.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider, config) {
    $routeProvider
    .when('/todo', {
      templateUrl: '/partials/todo.html'
    })
    .when('/view1', {
      templateUrl: '/partials/partial1.html'
    })
    .when('/view2', {
      templateUrl: '/partials/partial2.html'
    }).
    otherwise({
      redirectTo: '/todo'
    });
    return $locationProvider.html5Mode(false);
  }
]);
