'use strict';

/* Directives */
angular.module('app.patterns_directives', [])
.directive('forestPark', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/forest-park.html'
  }
})
.directive('winterSea', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/winter-sea.html'
  }
})
.directive('veryPdx', function() {
  return {
    restrict: 'E',
    scope: {
      custom: '='
    },
    templateUrl: '/partials/very-pdx.html'
  }
});