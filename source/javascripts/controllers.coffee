angular.module('controllers', ['values'])
.controller 'VeryPdxCtrl', [
  '$scope', 'hatSizes'
  ($scope, hatSizes) ->
    $scope.size = undefined
    $scope.customOptions = hatSizes

    # store the original template
    $scope.patternTemplate = {
      cast_on: 72,
      brim_rows: 11,
      brim_height: 2,
      body_height: 6.5,
      multiple: 4,
      baby_decreases: false,
      mc_yards: 135,
      cc_yards: 25,
      gauge_inch: 3.25,
      gauge_row_inch: 5
    }

    # used in the view
    $scope.pattern = angular.copy($scope.patternTemplate)

    $scope.customize = ->
      # copy the template for manipulation
      custom = angular.copy($scope.patternTemplate)
      custom.customized = true

      # after all is said and done, send the customized pattern to the view
      $scope.pattern = custom

    # listen for the directive to customize the size
    $scope.$on 'customized', (event, size) ->
      $scope.size = size
      $scope.customize()
    return
]