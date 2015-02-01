'use strict';

/* Sevices */
angular.module('pattern.images', [])
.service('Images', [function() {
  return {
    forestPark: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-1.jpg', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-2.jpg'],

    veryPdx: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/very-pdx-1.jpg'],

    winterSea: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/closeup.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/hanging.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/tail.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/fence.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/wingspan.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/bundle.JPG']
  }
}]);