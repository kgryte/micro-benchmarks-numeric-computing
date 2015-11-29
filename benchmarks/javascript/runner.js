'use strict';

// MODULES //

var run = require( './run.js' ),
	output = require( './output.js' );


// RUNNER //

/**
* FUNCTION: runner( tests, options )
*	Test runner.
*
* @param {Object} tests - tests to run
* @param {Object} options - test options
* @returns {Void}
*/
function runner( tests, options ) {
	var test,
		keys,
		name,
		opts,
		res,
		len,
		i, j;

	keys = Object.keys( tests );
	len = keys.length;
	for ( i = 0; i < len; i++ ) {
		name = keys[ i ];
		test = tests[ name ];
		opts = options.tests[ name ] || {};
		for ( j = 0; j < options.repeats; j++ ) {
			res = run( test, opts );
			output( name, res );
		}
	}
} // end FUNCTION runner()


// EXPORTS //

module.exports = runner;
