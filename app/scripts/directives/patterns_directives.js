'use strict';

/* Directives */
angular.module('app.patterns_directives', ['app.calculator_services', 'custom_hat_pattern', 'library.yarn'])
.directive('forestPark', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/forest-park.html'
  }
})
.directive('misdirected', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/misdirected.html'
  }
})
.directive('winterSea', function() {
  return {
    restrict: 'E',
    templateUrl: '/partials/winter-sea.html'
  }
})
.directive('veryPdx', ['calculator', 'hatCalculator', 'CustomHatPattern', 'Yarn', function(calculator, hatCalculator, CustomHatPattern, Yarn) {
  return {
    restrict: 'E',
    scope: {
      custom: '=',
      pattern: '='
    },
    templateUrl: '/partials/very-pdx.html',

    link: function(scope, element, attrs) {
      // listen for customization
      scope.$on('customized', function(customized, customSize) {
        var customHat = new CustomHatPattern(customSize, scope.pattern, 8);
        customHat.generate();

        // baby + odd numbered decreases
        customHat.set('decrease_4', false);
        if (customHat.cast_on % customHat.decreaseMultiple !== 0) {
          customHat.set('decrease_4', true);
        }

        // putting shit on the global scope
        scope.custom = customHat;
        scope.customSize = customSize;

        // yarns
        var mcYarn = new Yarn('Aran', mcYards(), 'MC');
        var ccYarn = new Yarn('Aran', ccYards(), 'CC');
        scope.pattern.yarns = [ mcYarn, ccYarn ];
      });

      // private - main color yards
      var mcYards = function() {
        var height = scope.custom.babyDecreases() ? scope.custom.body_height + 1.4 : scope.custom.body_height + 2.2;
        var area = calculator.areaHat(scope.customSize.value, height);
        return Math.floor(calculator.estimateYardage(area, 0.8));
      };

      // private - contrast color yards
      var ccYards = function() {
        var cArea = calculator.areaRectangle(scope.customSize.value, scope.customSize.ribbing - 0.25);
        return Math.floor(calculator.estimateYardage(cArea, 0.9));
      };
    }
  }
}]);