'use strict';

/* Sevices */
angular.module('app.custom_patterns_services', ['app.custom_options_services', 'app.library_services'])
.service('customPatterns', ['hatSizes', 'Needle', function(hatSizes, Needle) {
  var veryPdx = function() {
    var contrastNeedle = new Needle(5);
    var bodyNeedle = new Needle(5.5);
    return {
      src: '#/patterns/very-pdx-hat',
      patternDirective: 'very-pdx',
      name: 'Very PDX Hat',
      designer: 'Liz Abinante',
      customInstructions: 'Knit as-written for a women\'s small aran weight hat, or customize based on your desired size from infant to men\'s large.',
      description: 'A unisex cap with a double brim for warmth and smooth finish.',
      yarns: [
        { label: 'MC', weight: 'aran (or a lighter bulky)', yards: 135 },
        { label: 'CC', weight: 'aran (or a heavy worsted)', yards: 25 }
      ],
      yarnsShown: [
        { label: 'MC', info: 'madelinetosh tosh chunky in Steam Age' },
        { label: 'CC', info: 'The Plucky Knitter Primo Aran in Think Pink' }
      ],
      needles: [contrastNeedle.circular("16") + ' (contrast brim)', bodyNeedle.circular("16") + ' (brim RS and hat body).', bodyNeedle.dpns() + ' preferred needles for working small circumferences in the round.'],
      gauge: '13 sts, 20 rows per 4"/10cm in stockinette stitch using largest needle',
      gaugeInch: 3.25,
      gaugeRowInch: 5,
      finishedSizes: [{ label: 'customized', measurements: '13"/33cm - 25"/63.55cm'}, { label: 'as written', measurements: 'women\'s small (21"/53 cm) to fit a 22"/56cm head' }],
      customNote: 'The finished measurements are the actual measurements of the hat. Choose a size that gives you approximately 1"/2.54cm negative ease. I knit a women\'s small (21"/53cm) for myself and my head is approximately 22"/56cm around.',
      notions: ['stitch marker', 'waste yarn', 'darning needle'],
      version: '3 (January 25, 2015)',
      updates: [
        'Version 2: Corrected missing CC for brim CO; corrected missing yarn weight labels for custom sizes.',
        'Verison 3: Corrected last line of brim instructions before folding; originally read "Using smallest circular needle, k all sts", changed to "Using largest circular needle, k all sts".'
      ],
      images: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/very-pdx-1.jpg'],
      ravelry: {
        link: 'http://www.ravelry.com/patterns/library/very-pdx-hat',
        button: 'http://api.ravelry.com/badges/projects?p=very-pdx-hat&amp;t=.gif'
      },
      custom: true,
      customize_by: 'size',
      custom_options: hatSizes.all,
      custom_fields: {
        cast_on: 72,
        brim_rows: 11,
        brim_height: 2,
        body_height: 6.5,
        multiple: 4,
        baby_decreases: false
      }
    }
  }

  return {
    all: [veryPdx()],
    veryPdx: veryPdx()
  }
}]);