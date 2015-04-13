'use strict';

/**
 * @ngdoc function
 * @name todoYoTutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the todoYoTutApp
 */
angular.module('todoYoTutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
