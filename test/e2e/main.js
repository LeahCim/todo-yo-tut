'use strict';

describe('Todos form page', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('should have the correct header', function() {
    var header = element(by.tagName('h2')).getText();
    expect(header).toEqual('My todos');
  });

  describe('when adding a todo item', function() {
    var inputGroup = element(by.css('.input-group'));
    var newItemInput = inputGroup.element(by.model('todo'));
    var button = element(by.buttonText('Add'));
    var last = element.all(by.tagName('input')).last();

    function itShouldAcceptGoodInput(good) {
      it('should add "has-success" class to "input-group"', function() {
        expect(inputGroup).toHaveClass('has-success');
      });

      it('should add a new todo item', function() {
        button.click();
        expect(last.getAttribute('value')).toEqual(good);
      });
    }

    function itShouldRejectBadInput(bad) {
      it('should add "has-error" class to "input-group"', function() {
        expect(inputGroup).toHaveClass('has-error');
      });

      it('should not add a todo item', function() {
        button.click();
        expect(last.getAttribute('value')).not.toEqual(bad);
      });
    }

    describe('given valid input', function() {
      beforeEach(function() {
        newItemInput.clear().sendKeys('test 1');
      });

      itShouldAcceptGoodInput('test 1');
    });

    describe('given non-empty input that is then emptied', function() {
      beforeEach(function() {
        newItemInput.sendKeys('test 1').clear();
      });

      itShouldRejectBadInput('');

      describe('after rejecting empty input', function() {
        beforeEach(function() {
          button.click();
          newItemInput.sendKeys('test 1');
        });

        itShouldAcceptGoodInput('test 1');
      });
    });

    describe('given duplicate input', function() {
      beforeEach(function() {
        newItemInput.sendKeys('test 1');
        button.click();
        newItemInput.sendKeys('test 2');
        button.click();
        newItemInput.sendKeys('test 1');
      });

      itShouldRejectBadInput('test 1');

      describe('after rejecting duplicate input', function() {
        beforeEach(function() {
          button.click();
          newItemInput.clear().sendKeys('test 3');
        });

        itShouldAcceptGoodInput('test 3');
      });
    });
  });
});
