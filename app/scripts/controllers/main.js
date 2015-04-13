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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
