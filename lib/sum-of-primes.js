// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

module.exports = {
  sumOfPrimes: function(lastOne) {
    if(lastOne < 0){
      return -1;
    }
    if(typeof(lastOne)!="number"){
      return -1;
    }
    function prime(n){
      if(n<=1 || n%2==0){
        return false;
      }
      if(n==2 || n==3){
        return true;
      }

      var divisor = 3;
      var limit = Math.sqrt(n);
      while(divisor <= limit){
        if(n%divisor==0){
          return false;
        }
        divisor += 2;
      }
      return true;
    }
    var sum = 0;
    for(let i = 0; i < lastOne; i++){
      if(prime(i)){
       sum += i;
      }
    }
    return sum;
  }
  
}