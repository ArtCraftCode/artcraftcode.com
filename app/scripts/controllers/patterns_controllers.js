'use strict';

angular.module('app.patterns_controllers', ['app.patterns_services', 'app.custom_patterns_services'])
.controller('PatternsCtrl', ['$scope', 'patterns', 'customPatterns',function($scope, patterns, customPatterns) {
  $scope.patterns = patterns.all.concat(customPatterns.all);
  // $scope.customPatterns = customPatterns.all;
}])
.controller('ModalCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
  $scope.clickToOpen = function(img) {
    ngDialog.open({
      template: '/partials/modal.html',
      className: 'ngdialog-theme-default-large',
      data: img
    });
  };
}])
.controller('ForestParkCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.forestPark;
}])
.controller('VeryPdxCtrl', ['$scope', 'customPatterns', function($scope, customPatterns) {
  $scope.pattern = customPatterns.veryPdx;
}]);