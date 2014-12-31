'use strict';

/* Sevices */
angular.module('app.patterns_services', [])
.service('patterns', function() {
  var forestParkCowl = function() {
    return {
      src: '#/patterns/forest-park-cowl',
      patternDirective: 'forest-park',
      name: 'Forest Park Cowl',
      designer: 'Liz Abinante',
      description: 'A simple cabled cowl with garter stitch ribbing.',
      yarns: [
        'Approximately 300 yards/274 meters aran weight (or worsted weight, depending on your gauge) yarn.'
        ],
      yarnsShown: [
        'The Plucky Knitter Primo Aran (75% Merino, 20% Cashmere, 5% Nylon); 200 yards/183 meters per 115 grams. Approximately 1.5 skeins used.'
        ],
      needles: [
          'One US 7 (4.5mm) 16" circular (or 20" if preferred) needle.'
        ],
      gauge: '16 sts, 24 rows per 4"/10cm, garter stitch ribbing.',
      finishedSizes: [{
          label: 'one',
          measurements: '10.5"/26.6cm tall; 24"/61cm circumference at smallest opening, 33"/84cm circumference at largest opening.'
        }],
      notions: ['stitch marker', 'cable needle (optional)', 'darning needle'],
      version: '1 (December 29, 2014)',
      images: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-1.jpg', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-2.jpg'],
      ravelry: {
        link: '',
        button: ''
      }
    }
  }

  var veryPdxHat = function() {
    return {
      src: '#/patterns/very-pdx-hat',
      patternDirective: 'very-pdx-hat',
      name: 'Very PDX Hat',
      designer: 'Liz Abinante',
      description: '',
      yarns: [''],
      yarnsShown: [''],
      needles: [''],
      gauge: '',
      finishedSizes: [{ label: '', measurements: ''}],
      notions: [],
      version: '1 (December 29, 2014)',
      images: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/very-pdx-1.jpg'],
      ravelry: {
        link: '',
        button: ''
      },
      custom: true
    }
  }
  return {
    all: [forestParkCowl(), veryPdxHat()],
    forestParkCowl: forestParkCowl(),
    veryPdxHat: veryPdxHat()
  }
});
