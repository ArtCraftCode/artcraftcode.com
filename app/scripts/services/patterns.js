'use strict';

/* Sevices */
angular.module('app.patterns',
  [
  'library.needle', 'library.yarn',
  'pattern.versions', 'pattern.finished_sizes',
  'pattern.images', 'pattern.ravelry'
  ])
.service('patterns',
  ['Needle', 'Yarn', 'YarnShown', 'Version', 'FinishedSize', 'Images', 'Ravelry',
  function(Needle, Yarn, YarnShown, Version, FinishedSize, Images, Ravelry) {
  var forestPark = function() {
    var needle = new Needle(4.5);
    var yarn = new Yarn('Aran', 300);
    var yarnShown = new YarnShown('main', 'The Plucky Knitter Primo Aran (75% Merino, 20% Cashmere, 5% Nylon); 200 yards/183 meters per 115 grams', '1.5 skeins');
    var size = new FinishedSize('one', '10.5"/26.6cm tall; 24"/61cm circumference at smallest opening, 33"/84cm circumference at largest opening.');
    var version = Version.forestPark;

    return {
      src: '#/patterns/forest-park-cowl',
      patternDirective: 'forest-park',
      name: 'Forest Park Cowl',
      designer: 'Liz Abinante',
      description: 'A simple cabled cowl with garter stitch ribbing.',
      yarns: [yarn],
      yarnsShown: [yarnShown],
      needles: [needle.circular('16" or 20"')],
      gauge: '16 sts, 24 rows per 4"/10cm, garter stitch ribbing.',
      finishedSizes: [size],
      notions: ['stitch marker', 'cable needle (optional)', 'darning needle'],
      version: version.current,
      updates: version.updates,
      images: Images.forestPark,
      ravelry: new Ravelry('forest-park-cowl')
    }
  }

  var misdirected = function() {
    var needle = new Needle(4.5);
    var mc = new Yarn('DK', 220, 'MC');
    var cc = new Yarn('DK', 170, 'CC');
    var mcYarn = new YarnShown('MC', 'Wooly Wonka Freya DK (100% BFL, 300 yards/274 meters per 100 grams) in Pewter (gray)', '3/4 skein');
    var ccYarn = new YarnShown('CC', 'Wooly Wonka Freya DK in Winterfell (green)', '2/3 skein');
    var size = new FinishedSize('one', 'TBD');
    var version = Version.misdirected;

    return {
      src: '#/patterns/misdirected-cowl',
      patternDirective: 'misdirected',
      name: 'Misdirected Cowl',
      designer: 'Liz Abinante',
      description: 'A warm, oversized, easy-to-knit lace cowl that\'s great for color scraps!',
      yarns: [ mc, cc ],
      yarnsShown: [ mcYarn, ccYarn ],
      needles: [ needle.string() ],
      gauge: '24 sts per 4 inch/10 cm, 28 rows per 4 inch/10 cm',
      finishedSizes: [ size ],
      notions: ['darning needle'],
      version: version.current,
      updates: version.updates,
      images: Images.misdirected,
      ravelry: new Ravelry('misdirected-cowl')
    }
  }

  var winterSea = function() {
    var needle = new Needle(4.5);
    var yarn = new Yarn('Worsted', 390);
    var yarnShown = new YarnShown('main', 'Madelinetosh Tosh Vintage (100% superwash merino; 200 yards/182 meters per 100 grams), shown in Opaline', '1.9 skeins');
    var size = new FinishedSize('one', '53.25 in/135 cm wingspan, 19 in/48 cm at deepest point (see diagram)');
    var version = Version.winterSea;

    return {
      src: '#/patterns/winter-sea-shawl',
      patternDirective: 'winter-sea',
      name: 'Winter Sea',
      designer: 'Liz Abinante',
      description: 'An asymmetrically shaped shawl that\'s surprisingly easy to wear.',
      yarns: [yarn],
      yarnsShown: [yarnShown],
      needles: [needle.string() + ', circular recommended due to size'],
      gauge: '20 sts and 30 rows per 4 in/10 cm, stockinette stitch.',
      finishedSizes: [size],
      notions: ['split-ring marker', 'darning needle'],
      version: version.current,
      updates: version.updates,
      images: Images.winterSea,
      ravelry: new Ravelry('winter-sea-shawl-2')
    }
  }

  return {
    all: [misdirected(), winterSea(), forestPark()],
    forestPark: forestPark(),
    winterSea: winterSea(),
    misdirected: misdirected()
  }
}]);
