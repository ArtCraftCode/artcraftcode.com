'use strict';

/* Sevices */
angular.module('app.patterns_services', [])
.service('patterns', function() {
  var forestPark = function() {
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

  var veryPdx = function() {
    return {
      src: '#/patterns/very-pdx-hat',
      patternDirective: 'very-pdx',
      name: 'Very PDX Hat',
      designer: 'Liz Abinante',
      description: 'A unisex cap with a double brim for warmth and smooth finish.',
      yarns: ['Approximately 135 yards/123.4 meters bulky weight yarn (MC).', 'Approximately 25 yards/22.9 meters aran weight yarn (CC).'],
      yarnsShown: ['madelinetosh tosh chunky in Steam Age (MC)', 'The Plucky Knitter Primo Aran in Think Pink (CC).'],
      needles: ['US 8 (5 MM) 16" circular needle (contrast brim).', 'US 9 (5.5 MM) 16" circular needle (brim transition).', 'US 10 (6 MM) 16" circular needle (hat body).', 'US 10 (6 MM) set of DPNs or preferred needles for working small circumferences in the round.'],
      gauge: 'i am a taco',
      finishedSizes: [{ label: 'customized', measurements: '13"/33cm - 25"/63.55cm'}, { label: 'as written', measurements: 'women\'s medium (22"/56 cm).' }],
      notions: ['stitch marker', 'waste yarn', 'darning needle'],
      version: '1 (December 29, 2014)',
      images: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/very-pdx-1.jpg'],
      ravelry: {
        link: '',
        button: ''
      }
    }
  }
  return {
    all: [forestPark(), veryPdx()],
    forestPark: forestPark(),
    veryPdx: veryPdx()
  }
});
