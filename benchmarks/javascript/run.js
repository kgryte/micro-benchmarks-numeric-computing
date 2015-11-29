'use strict';

// MODULES //

var warmup = require( './warmup.js' );


// RUN //

/**
* FUNCTION: run( test, opts )
*	Runs a test.
*
* @param {Function} test - test to run
* @param {*} opts - test options
* @returns {Number} time in seconds
*/
function run( test, opts ) {
	var start,
		stop,
		err;

	err = warmup();
	if ( err instanceof Error ) {
		throw err;
	}

	start = process.hrtime();
	err = test( opts );
	stop = process.hrtime( start );

	if ( err instanceof Error ) {
		throw err;
	}
	// Returns the elapsed time in seconds:
	return stop[ 0 ] + stop[ 1 ]*1e-9;
} // end FUNCTION run()


// EXPORTS //

module.exports = run;
