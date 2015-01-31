'use strict';

/* Directives */
angular.module('app.patterns_directives', ['app.calculator_services'])
.directive('forestPark', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/forest-park.html'
  }
})
.directive('winterSea', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/winter-sea.html'
  }
})
.directive('veryPdx', ['calculator', 'hatCalculator', function(calculator, hatCalculator) {
  return {
    restrict: 'E',
    scope: {
      custom: '=',
      pattern: '='
    },
    templateUrl: '/partials/very-pdx.html',

    link: function(scope, element, attrs) {
      // don't change these or you'll die
      var decreaseMultiple = 8;
      var pattern = scope.pattern;

      // listen for customization
      scope.$on('customized', function(customized, customSize) {
        scope.customSize = customSize;
        customize();
      });

      // does this size need decreases for babies?
      scope.babyDecreases = function() {
        if (!scope.customSize) {
          return false;
        } else if (scope.customSize.value < 17) {
          return true;
        } else {
          return false;
        }
      };

      // customization functions
      var customize = function() {
        scope.custom.cast_on = calculator.castOn(scope.customSize.value, pattern.gaugeInch, scope.custom.multiple);
        scope.custom.brim_rows = hatCalculator.brimRows(pattern.gaugeRowInch, scope.customSize.ribbing);
        scope.custom.brim_height = scope.customSize.ribbing;
        scope.custom.body_height = hatCalculator.bodyHeight(scope.custom.cast_on, scope.customSize.height, decreaseMultiple, scope.babyDecreases());
        scope.custom.size_label = scope.customSize.label;

        // special decreases for non-multiples
        scope.custom.decrease_4 = false;
        if (scope.custom.cast_on % decreaseMultiple !== 0) {
          scope.custom.decrease_4 = true;
          scope.custom.decrease_mutliple = scope.custom.cast_on/4 - 2;
        }

        scope.pattern.yarns = [
          { label: 'MC', yards: mcYards(), weight: 'aran (or a lighter bulky)' },
          { label: 'CC', yards: ccYards(), weight: 'aran (or a heavy worsed)' },
        ];
      };

      var mcYards = function() {
        var height = scope.babyDecreases() ? scope.custom.body_height + 1.4 : scope.custom.body_height + 2.2;
        var area = calculator.areaHat(scope.customSize.value, height);
        return Math.floor(calculator.estimateYardage(area, 0.8));
      };

      var ccYards = function() {
        var area = calculator.areaRectangle(scope.customSize.value, scope.customSize.ribbing - 0.25);
        return Math.floor(calculator.estimateYardage(area, 0.9));
      };
    }
  }
}]);