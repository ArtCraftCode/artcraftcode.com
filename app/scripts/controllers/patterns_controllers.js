'use strict';

angular.module('app.patterns_controllers', ['app.patterns', 'app.custom_patterns'])
.controller('PatternsCtrl', ['$scope', 'patterns', 'customPatterns',function($scope, patterns, customPatterns) {
  $scope.patterns = patterns.all.concat(customPatterns.all);
  // $scope.customPatterns = customPatterns.all;
}])
.controller('ModalCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
  $scope.clickToOpen = function(img) {
    ngDialog.open({
      template: '/partials/modal_image.html',
      className: 'ngdialog-theme-default-large',
      data: img
    });
  };
}])
.controller('ForestParkCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.forestPark;
}])
.controller('WinterSeaCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.winterSea;
}]);