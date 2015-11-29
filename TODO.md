TODO
====

1. Differentiate between Node and the browser
	-	For node, run a test script as a separate process --> requires packaging the script up with associated warm-up and cool-down steps
		-	is this necessary? advantages?
		-	similar to how one might execute a script in other languages
2. auto-loop generation
	-	allows tracking per-loop performance (instrumentation)
	-	need a way to handle sub-nanosecond ops (?)
		-	record both total time elapsed and per op time elapsed
3. async support
4. for website, something akin to IRHydra to show how compiler is actually running the code
5. [matcha](https://github.com/logicalparadox/matcha)
6. 


## Notes

-	Cross-language benchmarks are not particularly informative. In general, performance is highly contextual, and many languages can be tweaked to get "optimal" performance.
	-	Further, many language support C/Fortran bindings for optimized numerical operations


