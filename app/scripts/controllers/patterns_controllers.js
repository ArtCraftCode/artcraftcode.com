'use strict';

angular.module('app.patterns_controllers', ['app.patterns_services', 'ngDialog'])
.controller('PatternsCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.patterns = patterns.all;
}])
.controller('ForestParkCtrl', ['$scope', 'patterns', 'ngDialog', function($scope, patterns, ngDialog) {
  $scope.pattern = patterns.forestParkCowl;
  $scope.clickToOpen = function(img) {
    ngDialog.open({
      template: '/partials/modal.html',
      className: 'ngdialog-theme-default-large',
      data: img
    });
  };
}])
.controller('VeryPdxCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.veryPdx;
}]);