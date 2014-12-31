'use strict';

/* Sevices */
angular.module('app.custom_patterns_services', ['app.patterns_services'])
.service('customPatterns', function(patterns) {
  var veryPdx = function() {
    return {
      origin: patterns.veryPdx,
      src: '#/patterns/very-pdx-hat/custom'
    }
  };

  return {
    all: [veryPdx()],
    veryPdx: veryPdx()
  }
});