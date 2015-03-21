angular.module('controllers', ['factories', 'services', 'values'])
.controller 'VeryPdxCtrl', [
  '$scope', 'calculator', 'CustomHatPattern', 'hatSizes'
  ($scope, calculator, CustomHatPattern, hatSizes) ->
    $scope.size = undefined
    $scope.customOptions = hatSizes

    # store the original template
    patternTemplate = {
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
    $scope.pattern = angular.copy(patternTemplate)

    # actually customize the pattern
    $scope.customize = ->
      custom = new CustomHatPattern($scope.size, patternTemplate, 8)
      custom.generate()
      $scope.pattern = custom
      # baby + odd numbered decreases
      $scope.pattern.set('decrease_4', false)
      if $scope.pattern.cast_on % $scope.pattern.decreaseMultiple != 0
        $scope.pattern.set('decrease_4', true)

      $scope.pattern.set('mc_yards', mcYards())
      $scope.pattern.set('cc_yards', ccYards())
      $scope.$apply()

    # listen for the directive to customize the size
    $scope.$on 'customized', (event, size) ->
      $scope.size = size
      $scope.customize()

    # private functions
    mcYards = ->
      height = if $scope.pattern.babyDecreases() then $scope.pattern.body_height + 1.4 else $scope.pattern.body_height + 2.2
      area = calculator.areaHat($scope.size.value, height);
      Math.floor(calculator.estimateYardage(area, 0.8));

    ccYards = ->
      area = calculator.areaRectangle($scope.size.value, $scope.pattern.brim_height - 0.25)
      Math.floor(calculator.estimateYardage(area, 0.9))

    return
]