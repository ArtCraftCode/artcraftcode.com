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
.controller('ForestParkCtrl', ['$scope', function($scope) {
  $scope.patternDirective = 'forest-park';

  $scope.title = 'Forest Park Cowl';
  $scope.designer = 'Liz Abinante';
  $scope.description = 'A simple cabled cowl with garter stitch ribbing.';

  $scope.yarns = ['Approximately 300 yards/274 meters aran (or worsted weight, depending on your gauge) yarn.'];

  $scope.yarnsShown = ['The Plucky Knitter Primo Aran (75% Merino, 20% Cashmere, 5% Nylon); 200 yards/183 meters per 115 grams. Approximately 1.5 skeins used.'];

  $scope.needles = [
    'One US 7 (4.5mm) 16" circular (or 20" if preferred) needle.'
  ];

  $scope.gauge = '16 sts, 19 rows per 4"/10cm, garter stitch ribbing.';

  $scope.finishedSizes = [{
    label: 'one',
    measurements: 'X"/Ycm tall; X"/Ycm circumference at smallest opening, X"/Ycm circumference at largest opening.'
  }];

  $scope.notions = ['stitch marker', 'cable needle (optional)', 'darning needle'];
}]);
