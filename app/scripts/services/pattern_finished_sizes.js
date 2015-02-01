'use strict';

/* Sevices */
angular.module('pattern.finished_sizes', [])
.factory('FinishedSize', [function() {
  function FinishedSize(label, measurements) {
    this.label = label;
    this.measurements = measurements;
  }

  return (FinishedSize);
}]);