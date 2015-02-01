'use strict';

/* Sevices */
angular.module('pattern.images', [])
.service('Images', [function() {
  return {
    forestPark: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-1.jpg', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-2.jpg'],

    misdirected: [
      'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/misdirected/IMG_6598.JPG',
      'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/misdirected/IMG_6600.JPG',
      'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/misdirected/IMG_6602.JPG',
      'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/misdirected/IMG_6604.JPG'
      ],

    veryPdx: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/very-pdx-1.jpg'],

    winterSea: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/closeup.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/hanging.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/tail.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/fence.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/wingspan.JPG', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/winter-sea/bundle.JPG']
  }
}]);