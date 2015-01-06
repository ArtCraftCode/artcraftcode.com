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
      version: '3 (January 4, 2015)',
      updates: [
        'Version 2: corrected Cable Set Two, Round 2. Originally ended with p1, k2, p1. Corrected to p1, k1, p1.',
        'Version 3: corrected Cable Set Two, Round 3. Originally ended with p1, m1l, k1, m1r, p1. Corrected to p1, m1l, kfb, m1r, p1.'
      ],
      images: ['https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-1.jpg', 'https://s3.amazonaws.com/artcraftcode.com/permanent_assets/forest-park-2.jpg'],
      ravelry: {
        link: 'http://www.ravelry.com/patterns/library/forest-park-cowl',
        button: 'http://api.ravelry.com/badges/projects?p=forest-park-cowl&amp;t=.gif'
      }
    }
  }

  var winterSea = function() {
    return {
      src: '#/patterns/winter-sea-shawl',
      patternDirective: 'winter-sea',
      name: 'Winter Sea',
      designer: 'Liz Abinante',
      description: 'Shaped asymmetrically, the shawl is surprisingly easy to wear and can be secured with a loose knot.',
      yarns: ['Approximately 390 yards/357 meters worsted weight.'],
      yarnsShown: ['Madelinetosh Tosh Vintage (100% superwash merino; 200 yards/182 meters per 100 grams), shown in Opaline. '],
      needles: ['US 7 (4.5mm) needle, circular recommended due to size.'],
      gauge: '20 sts and 30 rows per 4 in/10 cm, stockinette stitch.',
      finishedSizes: [{label: 'one', measurements: '53.25 in/135 cm wingspan, 19 in/48 cm at deepest point (see diagram)'}],
      notions: ['split-ring marker', 'darning needle'],
      version: '1 (January 4, 2015)',
      updates: [],
      images: [''],
      ravelry: {
        link: 'http://www.ravelry.com/patterns/library/winter-sea-shawl',
        button: 'http://api.ravelry.com/badges/projects?p=winter-sea-shawl&amp;t=.gif'
      }
    }
  }

  return {
    all: [forestPark(), winterSea()],
    forestPark: forestPark(),
    winterSea: winterSea()
  }
});
