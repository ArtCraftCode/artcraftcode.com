'use strict';

/* Sevices */
angular.module('app.custom_options_services', [])
.service('hatSizes', function() {
  var infant = {
    value: 13,
    label: 'Infant, 0-6 months (13" / 33 cm)',
    height: 2.5,
    ribbing: 1
  }

  var toddler = {
    value: 15,
    label: 'Toddler, 6-18 months (15" / 38 cm)',
    height: 4,
    ribbing: 1.5
  }

  var childSmall = {
    value: 17,
    label: 'Child\'s small (17" / 43 cm)',
    height: 5,
    ribbing: 1.5
  }

  var childMedium = {
    value: 20,
    label: 'Child\'s medium (20" / 51 cm)',
    height: 5,
    ribbing: 1.5
  }

  var childLarge = {
    value: 21,
    label: 'Child\'s large (21" / 53 cm)',
    height: 5,
    ribbing: 1.5
  }

  var womenSmall = {
    value: 21,
    label: 'Women\'s small (21" / 53 cm)',
    height: 5,
    ribbing: 2
  }

  var womenMedium = {
    value: 22,
    label: 'Women\'s medium (22" / 56 cm)',
    height: 6.5,
    ribbing: 2
  }

  var womenLarge = {
    value: 23,
    label: 'Women\'s large (23" / 58 cm)',
    height: 6.5,
    ribbing: 2
  }

  var menSmall = {
    value: 22,
    label: 'Men\'s small (22" / 56 cm)',
    height: 6.5,
    ribbing: 2
  }

  var menMedium = {
    value: 23,
    label: 'Men\'s medium (23" / 58 cm)',
    height: 6.5,
    ribbing: 2
  }

  var menLarge = {
    value: 25,
    label: 'Men\'s large (25" / 63.5 cm)',
    height: 6.5,
    ribbing: 2
  }

  return {
    all: [infant, toddler, childSmall, childMedium, childLarge, womenSmall, womenMedium, womenLarge, menSmall, menMedium, menLarge]
  }
});