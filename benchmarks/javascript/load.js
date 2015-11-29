'use strict';

// MODULES //

var path = require( 'path' ),
	exportDir = require( 'export-dir-files' );


// LOAD //

/**
* FUNCTION: load()
*	Loads test files.
*
* @returns {Object} object containing tests
*/
function load() {
	var dir = path.join( __dirname, 'test' );
	return exportDir( dir );
} // end FUNCTION load()


// EXPORTS //

module.exports = load();
