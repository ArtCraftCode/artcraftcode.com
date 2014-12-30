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
.controller('PatternCtrl', ['$scope', function($scope) {
  $scope.patterns = [
    {
      name: 'Forest Park Cowl',
      image: 'http://photos-f.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10848379_766588923390469_1766678445_n.jpg',
      src: '#/patterns/forest-park-cowl'
    },
    {
      name: 'Very PDX Hat',
      image: 'http://photos-e.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10735398_536669933134156_746872421_n.jpg',
      src: '#/patterns/very-pdx-hat'
    }
  ];
}])
.controller('ForestParkCtrl', ['$scope', 'app.services', function($scope, 'forestParkCowl') {
  $scope.pattern = forestParkCowl;
}]);
