'use strict';

// PRINT RESULTS //

/**
* FUNCTION: print( name, time, num )
*	Prints results to standard out.
*
* @param {String} name - benchmark name
* @param {Number} time - number of elapsed seconds
* @param {Number} num - number of operations
* @returns {Void}
*/
function print( name, time, num ) {
	console.log( 'javascript,%s,%d,%d', name, time, num );
} // end FUNCTION print()


// EXPORTS //

module.exports = print;
