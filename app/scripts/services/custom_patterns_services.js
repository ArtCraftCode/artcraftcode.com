'use strict';

/* Sevices */
angular.module('app.custom_patterns_services', ['app.custom_options_services', 'library.needle', 'library.yarn', 'pattern.versions', 'pattern.finished_sizes'])
.service('customPatterns', ['hatSizes', 'Needle', 'Yarn', 'YarnShown', 'Version', 'FinishedSize', function(hatSizes, Needle, Yarn, YarnShown, Version, FinishedSize) {
  var veryPdx = function() {
    var contrastNeedle = new Needle(5);
    var bodyNeedle = new Needle(5.5);
    var mc = new Yarn('Aran', 135, 'MC');
    var cc = new Yarn('Aran', 25, 'CC');
    var mcShown = new YarnShown('MC', 'madelinetosh tosh chunky in Steam Age')
    var ccShown = new YarnShown('CC', 'The Plucky Knitter Primo Aran in Think Pink')
    var customSize = new FinishedSize('customized', '13"/33cm - 25"/63.55cm');
    var writtenSize = new FinishedSize('as written', 'women\'s small (21"/53 cm) to fit a 22"/56cm head');
    var version = Version.veryPdx;

    return {
      src: '#/patterns/very-pdx-hat',
      patternDirective: 'very-pdx',
      name: 'Very PDX Hat',
      designer: 'Liz Abinante',
      customInstructions: 'Knit as-written for a women\'s small aran weight hat, or customize based on your desired size from infant to men\'s large.',
      description: 'A unisex cap with a double brim for warmth and smooth finish.',
      yarns: [ mc, cc ],
      yarnsShown: [ mcShown, ccShown ],
      needles: [contrastNeedle.circular('16"') + ' (contrast brim)', bodyNeedle.circular('16"') + ' (brim RS and hat body).', bodyNeedle.dpns() + ' or preferred needles for working small circumferences in the round.'],
      gauge: '13 sts, 20 rows per 4"/10cm in stockinette stitch using largest needle',
      gaugeInch: 3.25,
      gaugeRowInch: 5,
      finishedSizes: [ customSize, writtenSize ],
      customNote: 'The finished measurements are the actual measurements of the hat. Choose a size that gives you approximately 1"/2.54cm negative ease. I knit a women\'s small (21"/53cm) for myself and my head is approximately 22"/56cm around.',
      notions: ['stitch marker', 'waste yarn', 'darning needle'],
      version: version.current,
      updates: version.updates,
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