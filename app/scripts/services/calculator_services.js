'use strict';

/* Sevices */
angular.module('app.calculator_services', [])
.factory('calculator', function() {
  return {
    toYards: function(num) {
      return Number(num * 1.0936).toFixed(2)
    },

    toMeters: function(num) {
      return Number(num / 1.0936).toFixed(2);
    }
  }
});