'use strict';

/* Controllers */
angular.module('app.controllers', [])
.controller('AppCtrl', ['$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
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
.controller('ConvertersCtrl', ['$scope', function($scope) {
  $scope.yards = '';
  $scope.meters = '';

  // ideally i want to change either one
  // will this fall down and die?
  $scope.$watch('yards', function(oldValue, newValue){
    if (newValue !== oldValue) {
      $scope.meters = newValue;
    }
  });

  $scope.$watch('meters', function(oldValue, newValue){
     if (newValue !== oldValue) {
      $scope.yards = newValue;
    }
  });
}])
.controller('PatternsCtrl', ['$scope', 'app.services', function($scope, 'forestParkCowl', 'veryPdxHat') {
  $scope.patterns = [forestParkCowl, veryPdxHat];
}])
.controller('ForestParkCtrl', ['$scope', 'app.services', function($scope, 'forestParkCowl') {
  $scope.pattern = forestParkCowl;
}]);
