'use strict';

// LOAD //

/**
* FUNCTION: load( dir )
*	Loads test files.
*
* @param {String} dir - directory containing tests
* @returns {Object} object containing tests
*/
function load( dir ) {
	return require( dir );
} // end FUNCTION load()


// EXPORTS //

module.exports = load;
