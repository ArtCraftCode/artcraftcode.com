angular.module('controllers', ['values'])
.controller 'VeryPdxCtrl', [
  '$scope', 'ngDialog', 'hatSizes'
  ($scope, ngDialog, hatSizes) ->
    $scope.size = undefined
    $scope.customOptions = hatSizes

    # store the original template
    $scope.patternTemplate = {
      cast_on: 72,
      brim_rows: 11,
      brim_height: 2,
      body_height: 6.5,
      multiple: 4,
      baby_decreases: false
    }

    # used in the view
    $scope.pattern = angular.copy($scope.patternTemplate)

    $scope.customize = ->
      # copy the template for manipulation
      custom = angular.copy($scope.patternTemplate)

      # after all is said and done, sent the customized pattern to the view
      $scope.pattern = custom
      # do a thing!!!!

    # listen for the directive to customize the size
    $scope.$on 'customized', (event, size) ->
      $scope.size = size
      $scope.customize()
    return
]