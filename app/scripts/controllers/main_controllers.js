'use strict';

/* Controllers */
angular.module('app.main_controllers', ['app.calculator_services', 'app.patterns_services', 'app.custom_patterns_services'])
.controller('AppCtrl', ['$scope', '$location', '$resource', '$rootScope', 'patterns', 'customPatterns', function($scope, $location, $resource, $rootScope, patterns, customPatterns) {
  $scope.patterns = patterns.all.concat(customPatterns.all);
  $scope.$location = $location;
  $scope.$watch('$location.path()', function(path) {
    return $scope.activeNavId = path || '/';
  });
  return $scope.getClass = function(id) {
    if ($scope.activeNavId.substring(0, id.length) === id) {
      return 'active';
    } else {
      return '';
    }
  };
}])
.controller('ConvertersCtrl', ['$scope', 'calculator', function($scope, calculator) {
  $scope.yards;
  $scope.meters;
  $scope.convertedMeters;
  $scope.convertedYards;
  $scope.error;

  $scope.calculate = function() {
    if ($scope.yards > 0) {
      $scope.meters = calculator.toMeters($scope.yards);
      $scope.toMeters = true;
    } else if ($scope.meters > 0) {
      $scope.yards = calculator.toYards($scope.meters);
      $scope.toYards = true;
    }
  };

  $scope.converted = function() {
    return $scope.yards > 0 && $scope.meters > 0;
  };

  $scope.clear = function() {
    $scope.yards = undefined;
    $scope.meters = undefined;
    $scope.toYards = undefined;
    $scope.toMeters = undefined;
  };
}]);