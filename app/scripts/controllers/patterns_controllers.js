'use strict';

angular.module('app.patterns_controllers', ['app.patterns_services', 'app.custom_patterns_services', 'app.calculator_services'])
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
      className: 'ngdialog-theme-default-xlarge',
      scope: $scope
    });

    dialog.closePromise.then(function(data) {
      $scope.customInstructions = true;
      $scope.$parent.customize(data.value);
    });
  };

  $scope.toggleCustomInstructions = function() {
    $scope.customInstructions = !$scope.customInstructions;
  };
}])
.controller('ForestParkCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.forestPark;
}])
.controller('VeryPdxCtrl', ['$scope', 'customPatterns', 'calculator', function($scope, customPatterns, calculator) {
  $scope.pattern = customPatterns.veryPdx;
  $scope.customized = false;

  $scope.customize = function(size) {
    $scope.customSize = size;
    $scope.customized = true;

    castOn();
    brimRows();
    brimHeight();
    bodyHeight();
    babyDecreases();
    decreaseMultiples();

    $scope.pattern.custom_fields.size_label = $scope.customSize.label;
    $scope.pattern.finishedSizes = ['Custom: ' + $scope.customSize.label];
  };

  var castOn = function() {
    var raw = Math.floor($scope.customSize.value * $scope.pattern.gaugeInch);
    $scope.pattern.custom_fields.cast_on = calculator.nearestMultiple(raw, $scope.pattern.custom_fields.multiple);
  };

  var brimRows = function() {
    $scope.pattern.custom_fields.brim_rows = Math.floor($scope.pattern.gaugeRowInch * $scope.customSize.ribbing);
  };

  var brimHeight = function() {
    $scope.pattern.custom_fields.brim_height = $scope.customSize.ribbing;
  };

  var bodyHeight = function() {
    if ($scope.pattern.custom_fields.baby_decreases && $scope.pattern.custom_fields.cast_on % 8 !== 0) {
      $scope.pattern.custom_fields.body_height = $scope.customSize.height - 1;
    }
    else if ($scope.pattern.custom_fields.cast_on % 8 !== 0) {
      $scope.pattern.custom_fields.body_height = $scope.customSize.height - 0.6;
    } else {
      $scope.pattern.custom_fields.body_height = $scope.customSize.height;
    }
  };

  var babyDecreases = function() {
    if ($scope.customSize.value < 17) {
      $scope.pattern.custom_fields.baby_decreases = true;
    }
  };

  var decreaseMultiples = function() {
    // preferred decrease multiple is 8, but I need 4 for sizing
    if ($scope.pattern.custom_fields.cast_on % 8 !== 0) {
      $scope.pattern.custom_fields.decrease_4 = true;
      $scope.pattern.custom_fields.decrease_multiple = $scope.pattern.custom_fields.cast_on/4 - 2;
    } else {
      $scope.pattern.custom_fields.decrease_4 = false;
    }
  }
}]);