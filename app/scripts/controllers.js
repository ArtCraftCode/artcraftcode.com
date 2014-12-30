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
.controller('PatternsCtrl', ['$scope', 'app.services' function($scope, 'forestParkCowl', 'veryPdxHat') {
  $scope.patterns = [forestParkCowl, veryPdxHat];
}])
.controller('ForestParkCtrl', ['$scope', 'app.services', function($scope, 'forestParkCowl') {
  $scope.pattern = forestParkCowl;
}]);
