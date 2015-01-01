'use strict';

angular.module('app.patterns_controllers', ['app.patterns_services', 'app.custom_patterns_services'])
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
.controller('CustomCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
  $scope.customInstructions = false;

  $scope.showCustom = function() {
    ngDialog.open({
      template: '/partials/modal_custom_pattern.html',
      className: 'ngdialog-theme-default-large',
      scope: $scope,
      controller: ['$scope', function($scope) {
        $scope.applyCustomizations = function(option) {
          $scope.customInstructions = true;
          $scope.$parent.customize(option);
        }
      }]
    });
  };

  $scope.toggleCustomInstructions = function() {
    $scope.customInstructions = !$scope.customInstructions;
  }
}])
.controller('ForestParkCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.forestPark;
}])
.controller('VeryPdxCtrl', ['$scope', 'customPatterns', function($scope, customPatterns) {
  $scope.pattern = customPatterns.veryPdx;
  $scope.customized = false;

  $scope.customize = function(size) {
    $scope.customized = true;
  };
}]);