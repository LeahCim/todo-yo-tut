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
    });

    describe('when todo is non-empty', function() {
      beforeEach(function() {
        scope.todo = 'test';
        scope.addTodo();
      });

      it('should add the todo to list', function() {
        expect(scope.todos.length).toBe(initTodoLen+1);
        expect(scope.todos[initTodoLen]).toBe('test');
      });

      it('should clear scope.todo after adding to list', function() {
        expect(scope.todo).toBe('');
      });
    });

    it('should not add undefined todo to list', function() {
      scope.todo = undefined;
      scope.addTodo();

      expect(scope.todos.length).toBe(initTodoLen);
    });
  });
});
