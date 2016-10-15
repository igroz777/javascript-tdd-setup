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
  });