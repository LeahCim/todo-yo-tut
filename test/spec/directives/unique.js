'use strict';

describe('Directive: unique', function () {

  // load the directive's module
  beforeEach(module('todoYoTutApp'));

  var element,
    scope,
    form;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    scope.items = ['a', 'b'];
    element = angular.element(
      '<form name="form">' +
        '<input ng-model="item" name="item" unique>' +
      '</form>'
    );
    element = $compile(element)(scope);
    form = scope.form;
  }));

  it('should accept unique input', function () {
    form.item.$setViewValue('c');
    scope.$digest();
    expect(scope.item).toBe('c');
    expect(form.item.$valid).toBe(true);
  });

  it('should reject duplicate input', function () {
    form.item.$setViewValue('b');
    scope.$digest();
    expect(scope.item).toBe(undefined);
    expect(form.item.$valid).toBe(false);
  });
});
