'use strict';

// MODULES //

var debug = require( 'debug' )( 'benchmark:sum' );


// BEFORE //

/**
* FUNCTION: before( ctx, opts, next )
*	Runs setup tasks.
*
* @param {Object} ctx - test context
* @param {Object} opts - test options
* @param {Function} next - callback to invoke after completion of all asynchronous tasks
* @returns {Void}
*/
function before( ctx, opts ) {
	var arr,
		len,
		i;

	debug( 'Running setup tasks...' );
	len = opts.len;
	arr = new Array( len );
	for ( i = 0; i < len; i++ ) {
		arr[ i ] = i;
	}
	ctx.arr = arr;
	debug( 'Finished test setup.' );
} // end FUNCTION before()


// EXPORTS //

module.exports = before;
