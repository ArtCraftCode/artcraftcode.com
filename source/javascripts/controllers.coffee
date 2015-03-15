angular.module('controllers', ['values'])
.controller 'VeryPdxCtrl', [
  '$scope', 'ngDialog', 'hatSizes'
  ($scope, ngDialog, hatSizes) ->
    $scope.pattern = {
      custom_options: hatSizes
    }

    $scope.cast_on = 72
    $scope.brim_rows = 11
    $scope.brim_height = 2
    $scope.body_height = 6.5
    $scope.multiple = 4
    $scope.baby_decreases = false
]