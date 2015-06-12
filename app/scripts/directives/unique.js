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
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.$validators.unique = function(modelValue, viewValue) {
          if(scope[attrs.ngModel + 's'].indexOf(viewValue) === -1) {
            return true;
          } else {
            return false;
          }
        };
      }
    };
  });
