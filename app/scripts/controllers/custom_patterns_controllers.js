'use strict';

angular.module('app.custom_patterns_controllers', ['ngDialog', 'app.calculator_services'])
.controller('CustomCtrl', ['$scope', '$rootScope', 'ngDialog', function($scope, $rootScope, ngDialog) {
  $scope.customInstructions = false;

  $scope.showCustom = function() {
    var dialog = ngDialog.open({
      template: '/partials/modal_custom_pattern.html',
      className: 'ngdialog-theme-default-xlarge',
      scope: $scope
    });

    dialog.closePromise.then(function(data) {
      if (typeof data.value !== 'string') {
        $scope.customInstructions = true;
        $rootScope.$broadcast('customized', data.value);
      }
    });
  };

  $scope.toggleCustomInstructions = function() {
    $scope.customInstructions = !$scope.customInstructions;
  };
}])
.controller('VeryPdxCtrl', ['$scope', 'customPatterns', 'calculator', function($scope, customPatterns, calculator) {
  $scope.pattern = customPatterns.veryPdx;
}]);