'use strict';

var App = angular.module('app',
  [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngDialog',
    'app.main_controllers',
    'app.patterns_controllers',
    'app.patterns_services',
    'app.calculator_services',
    'app.patterns_directives',
    'app.widget_directives',
    'partials'
  ]
);

App.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider, config) {
    $routeProvider
    .when('/home', {
      templateUrl: '/partials/home.html'
    })
    .when('/collections', {
      templateUrl: '/partials/collections.html'
    })
    .when('/generators', {
      templateUrl: '/partials/generators.html'
    })
    .when('/converters', {
      templateUrl: '/partials/converters.html',
      controller: 'ConvertersCtrl'
    })
    .when('/calculators', {
      templateUrl: '/partials/calculators.html'
    })
    .when('/patterns', {
      templateUrl: '/partials/patterns.html'
    })
    .when('/patterns/forest-park-cowl', {
      templateUrl: '/partials/pattern.html',
      controller: 'ForestParkCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
    return $locationProvider.html5Mode(false);
  }
]);
