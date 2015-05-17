'use strict';

describe('Todos form page', function() {
  it('should have the correct header', function() {
    browser.get('/');
    var header = element(by.tagName('h2')).getText();
    expect(header).toEqual('My todos');
  });
});
