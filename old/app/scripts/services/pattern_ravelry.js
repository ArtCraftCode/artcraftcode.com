'use strict';

/* Sevices */
angular.module('pattern.ravelry', [])
.factory('Ravelry', [function() {
  function Ravelry(perma) {
    this.link = 'http://www.ravelry.com/patterns/library/' + perma;
    this.button = 'http://api.ravelry.com/badges/projects?p=' + perma + '&amp;t=.gif'
  }

  return (Ravelry);
}]);