'use strict';

/* Sevices */
angular.module('library.yarn', [])
.factory('Yarn', ['yarnLibrary', function(yarnLibrary) {
  function Yarn(label) {
    this.label = label;
    this.factor = yarnLibrary[this.label].factor;
    this.position = yarnLibrary[this.label].position;
  }

  Yarn.prototype.string = function() {
    return this.label + ' weight yarn';
  }

  Yarn.prototype.lightAlternate = function() {
    if (this.position === 0) {
      return null;
    }

    for (var yarn in yarnLibrary) {
      if (yarnLibrary[yarn].position === this.position - 1) {
        return new Yarn(yarn);
      }
    }
  }

  Yarn.prototype.heavyAlternate = function() {
    if (this.position === 8) {
      return null;
    }
    for (var yarn in yarnLibrary) {
      if (yarnLibrary[yarn].position === this.position + 1) {
        return new Yarn(yarn);
      }
    }
  }

  return (Yarn);
}])
.service('yarnLibrary', function() {
  return {
    'Lace': { 'position': 0, 'factor': 1.6 },
    'Light Fingering': { 'position': 1, 'factor': 1.4 },
    'Fingering': { 'position': 2, 'factor': 1.3 },
    'Sport': { 'position': 3, 'factor': 1.2 },
    'DK': { 'position': 4, 'factor': 1.1 },
    'Worsted': { 'position': 5, 'factor': 1 },
    'Aran': { 'position': 6, 'factor': 0.9 },
    'Bulky': { 'position': 7, 'factor': 0.7 },
    'Super Bulky': { 'position': 8, 'factor': 0.4 }
  }
});