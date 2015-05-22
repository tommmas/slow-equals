'use strict';

/*jshint expr: true*/

/*
* Suit of tests to attempt to identify whether potential timing vulnerabilities are 
* present when comparing strings using various methods.
**/


var Benchmark = require('benchmark');


// Slow Equals
console.log('Starting slowEqual test');

var slowEquals = require('../index.js');

var slowEqualsSuite = new Benchmark.Suite();

slowEqualsSuite
.add('slowEquals match first 0 chrs', function() {
  slowEquals('sotavatos','rotavator');
})
.add('slowEquals match first 1 chrs', function() {
  slowEquals('rptavatpr','rotavator');
})

// add listeners
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': false });



// Triple Equals
console.log('\n');
console.log('Starting === test');

var tripeEqualsSuite = new Benchmark.Suite();

tripeEqualsSuite
.add('=== match first 0 chrs', function() {
  'sotavatos' === 'rotavator';
})
.add('=== match first 1 chrs', function() {
  'rptavatpr' === 'rotavator';
})

// add listeners
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': false });




// Double Equals
console.log('\n');
console.log('Starting == suite');

var doubleEqualsSuite = new Benchmark.Suite();

doubleEqualsSuite
.add('== match first 0 chrs', function() {
  'sotavatos' == 'rotavator';
})
.add('== match first 1 chrs', function() {
  'rptavatpr' == 'rotavator';
})

// add listeners
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': false });



// Double Equals Reverse
console.log('\n');
console.log('Starting == test Reverse');

var doubleEqualsReviewSuite = new Benchmark.Suite();

doubleEqualsReviewSuite
.add('== match first 1 chrs', function() {
  'rptavatpr' == 'rotavator';
})

.add('== match first 0 chrs', function() {
  'sotavatos' == 'rotavator';
})

// add listeners
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': false });



// branch compare
console.log('\n');
console.log('Starting branch compare test');

var branchCompareSuite = new Benchmark.Suite();

branchCompareSuite
.add('branchCompare match first 0 chrs', function() {
  branchCompare('sotavatos', 'rotavator');
})
.add('branchCompare match first 1 chrs', function() {
  branchCompare('rptavatpr', 'rotavator');
})

// add listeners
.on('cycle', cycle)
.on('complete', complete)
.run({ 'async': false });



function cycle (event) {
  console.log(String(event.target));
}

function complete () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}

function branchCompare (a, b) {
  if (a.length !== b.length) return false;
  for(var i = 0; i < a.length; i++){
    if(a.charCodeAt(i) !== b.charCodeAt(i)) return false;
  }
  return true;
}