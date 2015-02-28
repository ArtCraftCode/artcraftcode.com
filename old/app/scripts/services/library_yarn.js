'use strict';

/* Sevices */
angular.module('library.yarn', [])
.factory('YarnShown', function(Yarn) {
  function YarnShown(label, detail, used) {
    this.label = label;
    this.detail = detail;
    this.used = used;
  }

  YarnShown.prototype.info = function() {
    return this.detail + ', approximately ' + this.used + ' used';
  }

  return (YarnShown);
})
.factory('Yarn', ['yarnLibrary', function(yarnLibrary) {
  function Yarn(bareWeight, yards, label) {
    this.bareWeight = bareWeight;
    this.weight = this.string();
    this.label = label;
    this.yards = yards;
    this.factor = yarnLibrary[this.bareWeight].factor;
    this.position = yarnLibrary[this.bareWeight].position;
  }

  Yarn.prototype.string = function() {
    return this.bareWeight + ' weight yarn';
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