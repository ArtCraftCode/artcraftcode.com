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
    var dialog = ngDialog.open({
      template: '/partials/modal_custom_pattern.html',
      className: 'ngdialog-theme-default-large',
      scope: $scope
    });

    dialog.closePromise.then(function(data) {
      $scope.customInstructions = true;
      $scope.$parent.customize(data.value);
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
    $scope.customSize = size;
    $scope.customized = true;

    // baby decreases get a special flag
    babyDecreases();
    // things to update
    // custom_fields: {
    //   cast_on: 72,
    //   brim_rows: 11,
    //   brim_height: 2,
    //   body_height: 6.5,
    //   multiple: 8,
    //   baby_decreases: false
    // }
  };

  var castOn = function() {

  };

  var brimRows = function() {

  };

  var brimHeight = function() {

  };

  var bodyHeight = function() {

  };

  var babyDecreases = function() {
    if ($scope.customSize.value <= 17) {
      $scope.pattern.custom_fields.baby_decreases = true;
    }
  };
}]);