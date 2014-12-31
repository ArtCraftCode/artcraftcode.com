'use strict';

/* Directives */
angular.module('app.patterns_directives', [])
.directive('forestPark', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/forest-park.html'
  }
})
.directive('veryPdx', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/very-pdx.html'
  }
});