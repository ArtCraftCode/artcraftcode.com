'use strict';

var App = angular.module('app',
  [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngDialog',
    'app.filters',
    'app.main_controllers',
    'app.custom_patterns_controllers',
    'app.patterns_controllers',
    'app.custom_patterns_services',
    'app.custom_options_services',
    'app.patterns_services',
    'app.calculator_services',
    'app.patterns_directives',
    'app.widget_directives',
    'library.needle',
    'library.yarn',
    'custom_hat_pattern',
    'pattern.versions',
    'pattern.finished_sizes',
    'pattern.ravelry',
    'pattern.images',
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
    .when('/about', {
      templateUrl: '/partials/about.html'
    })
    .when('/patterns', {
      templateUrl: '/partials/patterns.html',
      controller: 'PatternsCtrl'
    })
    .when('/patterns/forest-park-cowl', {
      templateUrl: '/partials/pattern.html',
      controller: 'ForestParkCtrl'
    })
    .when('/patterns/winter-sea-shawl', {
      templateUrl: '/partials/pattern.html',
      controller: 'WinterSeaCtrl'
    })
    .when('/patterns/very-pdx-hat', {
      templateUrl: '/partials/custom_pattern.html',
      controller: 'VeryPdxCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
    return $locationProvider.html5Mode(false);
  }
]);
