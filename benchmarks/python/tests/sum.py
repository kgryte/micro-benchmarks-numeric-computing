#!/usr/bin/python
# coding: utf-8


def test(n):
    """Sums consecutive numbers from 0 to `n`.

    Parameters
    ----------
    n : int
        maximum integer
    """

    s = 0
    for i in range(0, n):
        s += i
    return s
