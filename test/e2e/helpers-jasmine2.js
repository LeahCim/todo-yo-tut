'use strict';

exports.customMatchers = {
  toHaveClass: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {

        var classesPromise = actual.getAttribute('class')
          .then(function(classAttr) {
            return classAttr.split(' ');
          });

        var result = {
          pass: classesPromise.then(function(classes) {
            var hasClass = util.contains(classes, expected,
                                         customEqualityTesters);

            result.message =  'Expected list of classes ["' +
                              classes.join('", "') + '"] ' +
                              (hasClass ? 'not ' : '') +
                              'to contain class "' + expected + '".';
            return hasClass;
          })
        };
        return result;
      }
    };
  }
};
