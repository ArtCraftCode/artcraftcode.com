'use strict';

/* Sevices */
angular.module('library.needle', [])
.factory('Needle', ['needleLibrary', function(needleLibrary) {
  function Needle(mm) {
    this.mm = mm;
    this.us = needleLibrary[this.mm];
  }

  Needle.prototype.string = function() {
    debugger
    return 'US ' + this.us + ' (' + this.mm + 'mm)';
  }

  Needle.prototype.circular= function(length) {
    return this.string() + ' ' + length + ' circular needle';
  }

  Needle.prototype.dpns = function() {
    return this.string() + ' set of DPNS';
  }

  return (Needle);
}])
.service('needleLibrary', function() {
  return {
    '2': '0',
    '2.25': '1',
    '2.5': '1 1/2',
    '2.75': '2',
    '3': '2 1/2',
    '3.25': '3',
    '3.5': '4',
    '3.75': '5',
    '4': '6',
    '4.5': '7',
    '5': '8',
    '5.5': '9',
    '6': '10',
    '6.5': '10 1/2',
    '7': '7mm',
    '8': '11',
    '9': '13',
    '10': '15'
  }
});