'use strict';

/* Controllers */
angular.module('app.controllers', [])
.controller('AppCtrl', ['$scope', '$location', '$resource', '$rootScope', function($scope, $location, $resource, $rootScope) {
    $scope.$location = $location;
    $scope.$watch('$location.path()', function(path) {
      return $scope.activeNavId = path || '/';
    });
    return $scope.getClass = function(id) {
      if ($scope.activeNavId.substring(0, id.length) === id) {
        return 'active';
      } else {
        return '';
      }
    };
  }
])
.controller('PatternCtrl', ['$scope', function($scope) {
    $scope.patterns = [
      {
        name: 'Forest Park Cowl',
        image: 'http://photos-f.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10848379_766588923390469_1766678445_n.jpg',
        src: '#/patterns/forest-park-cowl'
      },
      {
        name: 'Very PDX Hat',
        image: 'http://photos-e.ak.instagram.com/hphotos-ak-xaf1/t51.2885-15/10735398_536669933134156_746872421_n.jpg',
        src: '#/patterns/very-pdx-hat'
      }
    ];
    // return $scope.onePlusOne = 2;
  }
])
.controller('TodoCtrl', ['$scope', function($scope) {
    $scope.todos = [
      {
        text: "learn angular",
        done: true
      }, {
        text: "build an angular app",
        done: false
      }
    ];
    $scope.addTodo = function() {
      $scope.todos.push({
        text: $scope.todoText,
        done: false
      });
      return $scope.todoText = "";
    };
    $scope.remaining = function() {
      var count;
      count = 0;
      angular.forEach($scope.todos, function(todo) {
        return count += (todo.done ? 0 : 1);
      });
      return count;
    };
    return $scope.archive = function() {
      var oldTodos;
      oldTodos = $scope.todos;
      $scope.todos = [];
      return angular.forEach(oldTodos, function(todo) {
        if (!todo.done) {
          return $scope.todos.push(todo);
        }
      });
    };
  }
]);
