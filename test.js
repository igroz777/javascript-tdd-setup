'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum-of-primes.js');

describe("Test that sum of primes is computed properly", function() {
  it("Entering negative number should return -1", function() {
    assert(
      lib.sumOfPrimes(-5)==-1
      );

  });
  it("Entering not a number should return -1", function() {
    assert(
      lib.sumOfPrimes("invalidValue")== -1
      );
  });
  it("Entering 10 should return 15", function() {
    assert(
      lib.sumOfPrimes(10)== 15
    );
  });
  it("Entering 20 should return 75", function() {
    assert(
      lib.sumOfPrimes(20)== 75
    );
  });
  it("Entering 30 should return 127", function() {
    assert(
      lib.sumOfPrimes(30)== 127
    );
  });
  it("Entering 1 should return 0", function() {
    assert(lib.sumOfPrimes(1)==0);
  });
  it("Entering 2 should return 0", function() {
    assert(
      lib.sumOfPrimes(2)== 0
    );
  });
  it("Sum of primes from 0 to 0 should be 0", function() {
    assert(
      lib.sumOfPrimes(0)== 0
    );
  });
});