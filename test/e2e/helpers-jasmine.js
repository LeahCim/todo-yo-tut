'use strict';

exports.customMatchers = {
  toHaveClass: function(expected) {
    var matcher = this;
    var result;

    result = this.actual.getAttribute('class').then(function(classAttr) {
      var classes = classAttr.split(' ');
      var hasClass = classes.indexOf(expected) > -1;

      matcher.message = function() {
        return 'Expected list of classes ["' +
               classes.join('", "') + '"] ' +
               (hasClass ? 'not ' : '') +
               'to contain class "' + expected + '".';
        };
      return hasClass;
    });
    return result;
  }
};
