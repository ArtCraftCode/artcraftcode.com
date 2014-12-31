'use strict';

angular.module('app.patterns_controllers', ['app.patterns_services'])
.controller('PatternsCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.patterns = patterns.all;
}])
.controller('ForestParkCtrl', ['$scope', 'patterns', function($scope, patterns) {
  $scope.pattern = patterns.forestParkCowl;
}]);