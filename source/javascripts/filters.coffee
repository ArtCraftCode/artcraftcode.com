angular.module('filters', [])
.filter('ydToM', ->
  (input) ->
    Number(input / 1.0936).toFixed(1)
)