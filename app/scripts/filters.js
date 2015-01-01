'use strict'

angular.module('app.filters', ['app.calculator_services'])
.filter('inToCm', function(calculator) {
  return function(input) {
    return calculator.inToCm(input);
  }
});