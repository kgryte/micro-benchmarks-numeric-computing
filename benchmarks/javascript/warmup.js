'use strict';

// VARIABLES //

var LEN = 10,
	N = 1e6;


// WARM-UP //

/**
* FUNCTION: warmup()
*	Performs a warm-up.
*
* @returns {Number|Error} a number or an error
*/
function warmup() {
	var arr,
		v,
		i, j;

	// Initialize a zeros array...
	arr = new Array( LEN );
	for ( i = 0; i < LEN; i++ ) {
		arr[ i ] = 0;
	}
	// Repeatedly add random numbers to array elements...
	for ( i = 0; i < N; i++ ) {
		j = i % LEN;
		arr[ j ] += Math.random();
	}
	// Normalize the sums...
	v = LEN / N;
	for ( j = 0; j < LEN; j++ ) {
		arr[ j ] = arr[ j ] * v;
	}
	// Pick a random array element...
	j = Math.floor( Math.random()*LEN );
	v = arr[ j ];
	if ( v > 1 ) {
		return new Error( 'unexpected behavior. Array value should be less than 1. Value: `' + v + '`.' );
	}
	return v;
} // end FUNCTION warmup()


// EXPORTS //

module.exports = warmup;
