'use strict';

// PRINT RESULTS //

/**
* FUNCTION: print( name, results )
*	Prints results to standard out.
*
* @param {String} name - benchmark name
* @param {Array} results - test results
* @returns {Void}
*/
function print( name, results ) {
	console.log( 'javascript,%s,%s', name, results.join( ',' ) );
} // end FUNCTION print()


// EXPORTS //

module.exports = print;
