'use strict';

/* Sevices */
angular.module('app.calculator_services', [])
.factory('calculator', function() {
  return {
    toYards: function(num) {
      return Number(num * 1.0936).toFixed(1)
    },

    toMeters: function(num) {
      return Number(num / 1.0936).toFixed(1);
    },

    inToCm: function(num) {
      return Number(num * 2.54).toFixed(1);
    },

    nearestMultiple: function(num, multiple) {
      return num + multiple - (num % multiple);
    },

    estimateYardage: function(area, yardageFactor) {
      return area * yardageFactor;
    },

    areaCircle: function(radius) {
      return 3.142 * radius * radius;
    },

    areaRectangle: function(width, height) {
      return width * height;
    },

    areaHat: function(circumference, bodyHeight) {
      var radius = circumference / 3.142 / 2;
      return this.areaRectangle(bodyHeight, circumference) + this.areaCircle(radius);
    },

    castOn: function(size, gauge, multiple) {
      var raw = Math.floor(size * gauge);
      return this.nearestMultiple(raw, multiple);
    }
  }
})
.factory('hatCalculator', function() {
  return {
    brimRows: function(gauge, ribbing) {
      return Math.floor(gauge * ribbing);
    },

    bodyHeight: function(castOn, height, multiple, adjusted) {
      // multiple (int)
      // adjusted is often for baby sizes (boolean)
      if (adjusted && multiple && (castOn % multiple !== 0)) {
        return height - 1;
      } else if (multiple && castOn % multiple !== 0) {
        return height = 0.6;
      } else {
        return height;
      }
    }
  }
});