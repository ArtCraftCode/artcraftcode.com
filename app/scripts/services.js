'use strict';

/* Sevices */
angular.module('app.services', [])
.factory('calculator', function() {
  return {
    toYards: function(num) {
      return Number(num * 1.0936).toFixed(2)
    },

    toMeters: function(num) {
      return Number(num / 1.0936).toFixed(2);
    }
  }
})
.service('forestParkCowl', function() {
  return {
    src: '#/patterns/forest-park-cowl'
    patternDirective: 'forest-park',
    title: 'Forest Park Cowl',
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
    gauge: '16 sts, 19 rows per 4"/10cm, garter stitch ribbing.',
    finishedSizes: [{
        label: 'one',
        measurements: 'X"/Ycm tall; X"/Ycm circumference at smallest opening, X"/Ycm circumference at largest opening.'
      }],
    notions: ['stitch marker', 'cable needle (optional)', 'darning needle'],
    version: '1 (December 29, 2014)',
    image: 'http://photos-f.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10848379_766588923390469_1766678445_n.jpg',
    ravelry: {
      link: '',
      button: ''
    }
  };
}).
service('veryPdxHat', function() {
  return {
    src: '#/patterns/very-pdx-hat'
    patternDirective: 'very-pdx-hat',
    title: 'Very PDX hat',
    description: '',
    yarns: [''],
    yarnsShown: [''],
    needles: [''],
    gauge: '',
    finishedSizes: [{ label: '', measurements: ''}],
    notions: [],
    version: '1 (December 29, 2014)',
    image: 'http://photos-e.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10735398_536669933134156_746872421_n.jpg',
    ravelry: {
      link: '',
      button: ''
    },
    custom: true
  };
});
