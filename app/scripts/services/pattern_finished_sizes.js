'use strict';

/* Sevices */
angular.module('pattern.finished_sizes', [])
.factory('FinishedSize', [function() {
  function FinishedSize(label) {
    this.label = label;
    this.measurements = [];
  }

  FinishedSize.prototype.measurement = function(label, inches) {
    this.measurements.push({
      'label': label,
      'inches': inches
    });
  }

  return (FinishedSize);
}]);