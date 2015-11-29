'use strict';

// MODULES //

var debug = require( 'debug' )( 'benchmark:sum' );


// AFTER //

/**
* FUNCTION: after( ctx, opts, next )
*	Runs final tasks.
*
* @param {Object} ctx - test context
* @param {Object} opts - test options
* @param {Function} next - callback to invoke after completion of all asynchronous tasks
*/
function after() {
	debug( 'Finished test.' );
} // end FUNCTION after()


// EXPORTS //

module.exports = after;
