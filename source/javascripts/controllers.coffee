angular.module('controllers', ['values'])
.controller 'VeryPdxCtrl', [
  '$scope', 'ngDialog', 'hatSizes'
  ($scope, ngDialog, hatSizes) ->
    $scope.pattern = {
      name: 'Very PDX',
      customize_by: 'Size',
      custom_note: 'The finished measurements are the actual measurements of the hat. Choose a size that gives you approximately 1"/2.54cm negative ease. I knit a women\'s small (21"/53cm) for myself and my head is approximately 22"/56cm around.',
      custom_options: hatSizes
    }

    $scope.cast_on = 72
    $scope.brim_rows = 11
    $scope.brim_height = 2
    $scope.body_height = 6.5
    $scope.multiple = 4
    $scope.baby_decreases = false

    $scope.showPrompt = ->
      dialog = ngDialog.open({
        template: 'templates_modal'
        scope: $scope,
        className: 'ngdialog-theme-default-xlarge'
      })

      dialog.closePromise.then (data)->
        if typeof data.value != 'string'
          console.log data.value
]