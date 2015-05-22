'use strict';

/*jshint expr: true*/

var expect = require('chai').expect;

var slowEquals = require('../index.js');

describe('slowEquals', function () {

  it('should return true with equal strings', function () {
    expect( slowEquals('abc', 'abc') ).to.be.true;
  });

  it('should return false with different length strings', function () {
    expect( slowEquals('abc', 'abcd') ).to.be.false;
    expect( slowEquals('abcd', 'abc') ).to.be.false;
  });

  it('should return false with equal length strings with different characters', function () {
    expect( slowEquals('abcd', 'abce') ).to.be.false;
    expect( slowEquals('abce', 'abcd') ).to.be.false;
    expect( slowEquals('abcd', 'Abcd') ).to.be.false;
    expect( slowEquals('Abcd', 'abcd') ).to.be.false;
  });

});