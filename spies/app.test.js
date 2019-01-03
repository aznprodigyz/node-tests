const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db',db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('David', 25);
    expect(spy).toHaveBeenCalled('David', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'testing123@gmail.com';
    var password = '123';
    app.handleSignUp(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password});
  });

});
