#!/usr/bin/python
# coding: utf-8

import time
from utils.warmup import warmup
from utils.print_results import print_results
from tests import *


N = 1000000
NUMREPEATS = 5

if __name__ == "__main__":
    warmup()
    for i in range(0, NUMREPEATS):
        start = time.time()
        sum.test(N)
        stop = time.time()

        diff = stop - start

        print_results('sum', diff, N)
