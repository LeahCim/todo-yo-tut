'use strict';

describe('Directive: unique', function () {

  // load the directive's module
  beforeEach(module('todoYoTutApp'));

  var element,
    scope,
    form;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    scope.todos = ['a', 'b'];
    element = angular.element(
      '<form name="form">' +
        '<input ng-model="todo" name="todo" unique>' +
      '</form>'
    );
    element = $compile(element)(scope);
    form = scope.form;
  }));

  it('should accept unique input', function () {
    form.todo.$setViewValue('c');
    scope.$digest();
    expect(scope.todo).toBe('c');
    expect(form.todo.$valid).toBe(true);
  });

  it('should reject duplicate input', function () {
    form.todo.$setViewValue('b');
    scope.$digest();
    expect(scope.todo).toBe(undefined);
    expect(form.todo.$valid).toBe(false);
  });
});
