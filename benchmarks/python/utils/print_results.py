#!/usr/bin/env python
# coding: utf-8


def print_results(name, elapsed_time, num_iter):
    """Serializes test results and prints to stdout.

    Parameters
    ----------
    name : str
        test name
    elapsed_time : int
        elapsed time (in seconds)
    num_iter : int
        number of iterations
    """

    print('python,' + name + ',' + str(elapsed_time) + ',' + str(num_iter))
