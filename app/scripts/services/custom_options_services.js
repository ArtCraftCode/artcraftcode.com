'use strict';

/* Sevices */
angular.module('app.custom_options_services', [])
.service('hatSizes', function() {
  var infant = {
    value: 13,
    label: 'Infant, 0-6 months',
    measurements: '13" / 33 cm',
    height: 2.5,
    ribbing: 1
  }

  var toddler = {
    value: 15,
    label: 'Toddler, 6-18 months',
    measurements: '15" / 38 cm',
    height: 4,
    ribbing: 1.5
  }

  var childSmall = {
    value: 17,
    label: 'Child\'s small',
    measurements: '17" / 43 cm',
    height: 5,
    ribbing: 1.5
  }

  var childMedium = {
    value: 20,
    label: 'Child\'s medium',
    measurements: '20" / 51 cm',
    height: 5,
    ribbing: 1.5
  }

  var childLarge = {
    value: 21,
    label: 'Child\'s large',
    measurements: '21" / 53 cm',
    height: 5,
    ribbing: 1.5
  }

  var womenSmall = {
    value: 21,
    label: 'Women\'s small',
    measurements: '21" / 53 cm',
    height: 5,
    ribbing: 2
  }

  var womenMedium = {
    value: 22,
    label: 'Women\'s medium',
    measurements: '22" / 56 cm',
    height: 6.5,
    ribbing: 2
  }

  var womenLarge = {
    value: 23,
    label: 'Women\'s large',
    measurements: '23" / 58 cm',
    height: 6.5,
    ribbing: 2
  }

  var menSmall = {
    value: 22,
    label: 'Men\'s small',
    measurements: '22" / 56 cm',
    height: 6.5,
    ribbing: 2
  }

  var menMedium = {
    value: 23,
    label: 'Men\'s medium',
    measurements: '23" / 58 cm',
    height: 6.5,
    ribbing: 2
  }

  var menLarge = {
    value: 25,
    label: 'Men\'s large',
    measurements: '25" / 63.5 cm',
    height: 6.5,
    ribbing: 2
  }

  return {
    all: [infant, toddler, childSmall, childMedium, childLarge, womenSmall, womenMedium, womenLarge, menSmall, menMedium, menLarge]
  }
});