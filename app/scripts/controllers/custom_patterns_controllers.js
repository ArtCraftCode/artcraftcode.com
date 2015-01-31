'use strict';

angular.module('app.custom_patterns_controllers', ['ngDialog'])
.controller('CustomCtrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
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
        $scope.customized = true;
        $scope.customSize = data.value;
      }
    });
  };

  $scope.toggleCustomInstructions = function() {
    $scope.customInstructions = !$scope.customInstructions;
  };
}])
.controller('VeryPdxCtrl', ['$scope', 'customPatterns', 'calculator', function($scope, customPatterns, calculator) {
  $scope.pattern = customPatterns.veryPdx;
  $scope.customized = false;
  $scope.customSize = undefined;

  $scope.customize = function(size) {
    $scope.customSize = size;
    $scope.customized = true;

    castOn();
    brimRows();
    brimHeight();
    bodyHeight();
    babyDecreases();
    decreaseMultiples();
    yardage();

    $scope.pattern.custom_fields.size_label = $scope.customSize.label;
    $scope.pattern.finishedSizes = [{label: 'Custom', measurements: $scope.customSize.label}];
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
  };

  var yardage = function() {
    var height;
    if ($scope.pattern.custom_fields.baby_decreases) {
      height = $scope.pattern.custom_fields.body_height + 1.4;
    } else {
      height = $scope.pattern.custom_fields.body_height + 2.2;
    }

    // main hat
    var area = calculator.areaHat($scope.customSize.value, height);
    var yards = Math.floor(calculator.estimateYardage(area, 0.8));

    // contrast brim
    var ccArea = calculator.areaRectangle($scope.customSize.value, $scope.customSize.ribbing - 0.25);
    var ccYards = Math.floor(calculator.estimateYardage(ccArea, 0.9));
    $scope.pattern.yarns = [
      { label: 'MC', yards: yards, weight: 'aran (or a lighter bulky)' },
      { label: 'CC', yards: ccYards, weight: 'aran (or a heavy worsted)' }
    ];
  }
}]);