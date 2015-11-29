'use strict';

// MODULES //

var path = require( 'path' );


// OPTS //

var opts = {
	'dir': path.join( __dirname, 'test' ),
	'repeats': 5,
	'tests': {
		'sum': {
			'len': 100,
			'iterations': 1e6
		}
	}
};


// EXPORTS //

module.exports = opts;
