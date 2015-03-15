//= require "vendor/angular.min"
//= require "vendor/angular-route.min"
//= require "vendor/ngDialog.min"
//= require "controllers"
//= require "directives"
//= require "factories"
//= require "filters"
//= require "services"
//= require "values"

var App = angular.module('app',
  [
    'ngRoute',
    'ngDialog',
    'controllers',
    'directives',
    'factories',
    'filters',
    'services',
    'values'
  ]
);

