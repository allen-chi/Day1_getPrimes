(function(){
 'use strict';

 var chai = require('chai');
 var expect = chai.expect;

 var myApp = require('../app/getPrimes.js');

 describe("Prime Numbers Tests", function() {
 describe("Case for some invalid values", function() {

   it("should return 'invalid number' for 0", function() {
     expect(myApp.getPrimes(0)).to.equal('invalid number');
   });

   it("should return 'invalid number' for -7", function() {
     expect(myApp.getPrimes(-7)).to.equal('invalid number');
   });

    it("should return 'argument must be number' for stringValue", function() {
     expect(myApp.getPrimes("hello")).to.equal('value must be number');
   });

 });

 describe("Case for correct values", function() {

   it("should return [ 2, 3, 5, 7, 11, 13, 17, 19 ] for 22", function() {
     expect(myApp.getPrimes(22)).to.eql([ 2, 3, 5, 7, 11, 13, 17, 19 ]);
   });
it("should return [] for 2", function() {
     expect(myApp.getPrimes(2)).to.eql([]);
   });

 });

});

})();
