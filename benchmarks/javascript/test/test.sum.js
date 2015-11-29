'use strict';

// SUM //

/**
* FUNCTION: sum( n )
*	Computes a sum.
*
* @param {Number} n - number of iterations
* @returns {Number} sum
*/
function sum( n ) {
	var s, i;
	s = 0;
	for ( i = 0; i < n; i++ ) {
		s += i;
	}
	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
