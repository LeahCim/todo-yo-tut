'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('todoYoTutApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      // Object keys are strings so $scope is same as "$scope".
      // Injecting our mock scope into the controller here.
      $scope: scope
    });
  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(3);
  });

  describe('.addTodo', function() {
    var initTodoLen;
    beforeEach(function() {
      initTodoLen = scope.todos.length;
      scope.todo = 'test';
      scope.addTodo();
    });

    it('should add a todo to the list', function() {
      expect(scope.todos.length).toBe(initTodoLen+1);
      expect(scope.todos[initTodoLen]).toBe('test');
    });

    it('should clear scope.todo after adding to list', function() {
      expect(scope.todo).toBe('');
    });
  });
});
