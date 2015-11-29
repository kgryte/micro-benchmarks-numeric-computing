'use strict';

// TEST //

/**
* FUNCTION: sum( ctx, opts, next )
*	Computes a sum.
*
* @param {Object} ctx - test context
* @param {Object} opts - test options
* @param {Function} next - callback to invoke after finishing an asynchronous test
* @returns {Number} sum
*/
function sum( ctx ) {
	var arr = ctx.arr,
		len = arr.length,
		s, i;

	s = 0;
	for ( i = 0; i < len; i++ ) {
		s += arr[ i ];
	}
	return s;
} // end FUNCTION sum()


// EXPORTS //

module.exports = sum;
