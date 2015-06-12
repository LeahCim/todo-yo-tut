'use strict';

/**
 * @ngdoc function
 * @name todoYoTutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoYoTutApp
 */
angular.module('todoYoTutApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'Item 1',
      'Item 2',
      'Item 3'
    ];

    $scope.addTodo = function() {
      if($scope.todo !== undefined) {
        $scope.todos.push($scope.todo);
        $scope.todo = undefined;
      }
    };
  });
