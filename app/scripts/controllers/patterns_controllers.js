'use strict';

angular.module('app.patterns_controllers', ['app.patterns_services', 'app.custom_patterns_services'])
.controller('PatternsCtrl', ['$scope', 'patterns', 'customPatterns',function($scope, patterns, customPatterns) {
  $scope.patterns = patterns.all;
  $scope.customPatterns = customPatterns.all;
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