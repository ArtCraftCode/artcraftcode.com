'use strict';

/* Sevices */
angular.module('versions', [])
.service('Version', [function() {
  return {
    forestPark: {
      current: '3 (January 4, 2015)',
      updates: [
        'Version 2: corrected Cable Set Two, Round 2. Originally ended with p1, k2, p1. Corrected to p1, k1, p1.',
        'Version 3: corrected Cable Set Two, Round 3. Originally ended with p1, m1l, k1, m1r, p1. Corrected to p1, m1l, kfb, m1r, p1.'
      ]
    },

    veryPdx: {
      current: '3 (January 25, 2015)',
      updates: [
        'Version 2: Corrected missing CC for brim CO; corrected missing yarn weight labels for custom sizes.',
        'Verison 3: Corrected last line of brim instructions before folding; originally read "Using smallest circular needle, k all sts", changed to "Using largest circular needle, k all sts".'
      ]
    },

    winterSea: {
      current: '1 (January 4, 2015)',
      updates: []
    }
  }
}]);