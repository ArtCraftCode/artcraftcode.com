'use strict';

/* Directives */
angular.module('app.directives',
  [
    'app.patterns'
  ])
.directive('forestPark', function() {
    return {
      restrict: 'E',
      templateUrl: '/partials/forest-park.html'
    }
  }
)
.directive('abbreviations', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/abbreviations.html'
  }
})
.directive('appVersion', [
  'version', function(version) {
    return function(scope, elm, attrs) {
      return elm.text(version);
    };
  }
]);
