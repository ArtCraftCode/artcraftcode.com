'use strict';

/* Sevices */
angular.module('app.services', [])
.factory('version', function() {
  return "0.1";
})
.service('forestParkCowl', function() {
  return {
    patternDirective: 'forest-park',
    title: 'Forest Park Cowl',
    description: 'A simple cabled cowl with garter stitch ribbing.',
    yarns: [
      'Approximately 300 yards/274 meters aran (or worsted weight, depending on your gauge) yarn.'
      ],
    yarnsShown: [
      'The Plucky Knitter Primo Aran (75% Merino, 20% Cashmere, 5% Nylon); 200 yards/183 meters per 115 grams. Approximately 1.5 skeins used.'
      ],
    needles: [
        'One US 7 (4.5mm) 16" circular (or 20" if preferred) needle.'
      ],
    gauge: '16 sts, 19 rows per 4"/10cm, garter stitch ribbing.',
    finishedSizes: [{
        label: 'one',
        measurements: 'X"/Ycm tall; X"/Ycm circumference at smallest opening, X"/Ycm circumference at largest opening.'
      }],
    notions: ['stitch marker', 'cable needle (optional)', 'darning needle'],
    version: '1 (December 29, 2014)'
  };
});
