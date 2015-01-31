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
      custom: '=',
      customized: '=',
      customSize: '='
    },
    templateUrl: '/partials/very-pdx.html',

    link: function(scope, element, attrs) {
      // change the value of scope.custom
      if (scope.customized) { customize(); }

      var customize = function() {

      };
    }
  }
});