'use strict';

/* Directives */
angular.module('app.widget_directives', [])
.directive('abbreviations', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/abbreviations.html'
  }
});
