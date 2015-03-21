angular.module('filters', [])
.filter('ydToM', ->
  (input) ->
    Number(input / 1.0936).toFixed(1)
)
.filter('inToCm', ->
  (input) ->
    Number(input * 2.54).toFixed(1)
)