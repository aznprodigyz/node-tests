const expect = require('expect');
const utils = require("./utils");

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33,11);

      expect(res).toBe(44).toBeA('number');

      // if (res != 44 ){
      //   throw new Error(`expected 44, but got ${res}`);
      // }

    });
  });


  it('should asyncAdd two numbers', (done) => {
    utils.asyncAdd(4,3,(sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number' , () => {
    var res = utils.square(8);
    expect(res).toBe(64).toBeA('number');
    // if (res != 64){
    //   throw new Error(`expected 64, but got ${res}`);
    // }
  });

  it('should asyncSquare a number', (done) => {
    utils.asyncSquare(9,(res) => {
      expect(res).toBe(81).toBeA('number');
      done();
    });
  });
});


it('should expect some values', () => {
  //expect(12).toNotBe(12);
  expect({name: 'andrew'}).toEqual({name: 'andrew'});
});

it('should verify first and last name are set', () => {
  var user = {location: 'philadelphia', age: '25'};
  var res = utils.setName(user, 'david zhang');
  expect(res).toInclude({
    firstName: 'david',
    lastName: 'zhang'
  });
});
