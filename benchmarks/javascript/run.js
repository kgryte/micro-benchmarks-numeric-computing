'use strict';

// MODULES //

var warmup = require( './warmup.js' ),
	context = require( './context.js' );


// RUN //

/**
* FUNCTION: run( test, opts )
*	Runs a test.
*
* @param {Function} test - test to run
* @param {Object} opts - test options
* @returns {Array} test results
*/
function run( test, opts ) {
	var start,
		stop,
		err,
		out,
		ctx,
		i;

	// Test warm-up:
	err = warmup();
	if ( err instanceof Error ) {
		throw err;
	}
	// Test context:
	ctx = context();

	// Test setup::
	if ( test.before ) {
		test.before( ctx, opts );
	}
	// Run the test:
	start = process.hrtime();
	for ( i = 0; i < opts.iterations; i++ ) {
		err = test( ctx, opts );
	}
	stop = process.hrtime( start );

	if ( err instanceof Error ) {
		throw err;
	}
	// Finishing tasks:
	if ( test.after ) {
		test.after( ctx, opts );
	}
	// Compile test results...
	// => [ time, ops ]
	out = new Array( 2 );

	// Total elapsed seconds:
	out[ 0 ] = stop[ 0 ] + stop[ 1 ]*1e-9;

	// Operations per second:
	out[ 1 ] = Math.floor( opts.iterations / out[ 0 ] );

	return out;
} // end FUNCTION run()


// EXPORTS //

module.exports = run;
