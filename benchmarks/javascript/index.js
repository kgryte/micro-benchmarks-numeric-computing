'use strict';

// MODULES //

var run = require( './run.js' ),
	tests = require( './load.js' ),
	output = require( './output.js' );


// VARIABLES //

var NUMREPEATS = 5;


// MAIN //

/**
* FUNCTION: main()
*	Main function.
*
* @returns {Void}
*/
function main() {
	var test,
		keys,
		time,
		name,
		opts,
		len,
		i, j;

	opts = 1e6;

	keys = Object.keys( tests );
	len = keys.length;
	for ( i = 0; i < len; i++ ) {
		name = keys[ i ];
		test = tests[ name ];
		for ( j = 0; j < NUMREPEATS; j++ ) {
			time = run( test, opts );
			output( name, time, opts );
		}
	}
} // end FUNCTION main()


// EXPORTS //

module.exports = main();
