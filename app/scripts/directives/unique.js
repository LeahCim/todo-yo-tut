'use strict';

/**
 * @ngdoc directive
 * @name todoYoTutApp.directive:unique
 * @description
 * # unique
 */
angular.module('todoYoTutApp')
  .directive('unique', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the unique directive');
      }
    };
  });
