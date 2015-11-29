'use strict';

// MODULES //

var OPTS = require( './opts.js' ),
	load = require( './load.js' ),
	validate = require( './validate.js' ),
	runner = require( './runner.js' );


// MAIN //

/**
* FUNCTION: main( [options] )
*	Main function.
*
* @param {Object} [options] - benchmark options
* @returns {Void}
*/
function main( options ) {
	var tests,
		opts,
		err;

	// TODO: remove
	opts = OPTS;

	// opts = {};
	if ( arguments.length ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	// TODO: default is cwd and sub-directory named "benchmark"
	tests = load( opts.dir );

	runner( tests, opts );
} // end FUNCTION main()


// EXPORTS //

module.exports = main(); // TODO: should not execute
