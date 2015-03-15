angular.module('controllers', ['factories', 'values'])
.controller 'VeryPdxCtrl', [
  '$scope', 'CustomHatPattern', 'hatSizes'
  ($scope, CustomHatPattern, hatSizes) ->
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
      custom = new CustomHatPattern($scope.size, $scope.pattern, 8)
      custom.generate()
      $scope.pattern = custom
      $scope.$apply()

    # listen for the directive to customize the size
    $scope.$on 'customized', (event, size) ->
      $scope.size = size
      $scope.customize()
    return
]