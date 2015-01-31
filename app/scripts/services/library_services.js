'use strict';

/* Sevices */
angular.module('app.library_services', [])
.factory('Needle', ['needleLibrary', function(needleLibrary) {
  function Needle(mm) {
    this.mm = mm;
    this.us = needleLibrary[this.mm];
  }

  Needle.prototype.string = function() {
    return 'US ' + this.us + ' (' + this.mm + 'mm)';
  }

  Needle.prototype.circular= function(length) {
    return this.string() + ' ' + length + 'circular needle'
  }

  return (Needle);
}])
.service('needleLibrary', function() {
  return {
    '2.0': '0',
    '2.25': '1',
    '2.5': '1 1/2',
    '2.75': '2',
    '3.0': '2 1/2',
    '3.25': '3',
    '3.5': '4',
    '3.75': '5',
    '4.0': '6',
    '4.5': '7',
    '5.0': '8',
    '5.5': '9',
    '6.0': '10',
    '6.5': '10 1/2',
    '7': '7mm',
    '8.0': '11',
    '9.0': '13',
    '10': '15'
  }
});