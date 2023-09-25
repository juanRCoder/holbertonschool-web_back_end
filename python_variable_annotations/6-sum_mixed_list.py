#!/usr/bin/env python3
""" Script that return sum of the values int and float"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ function that return sum of the values int and float """
    return sum(mxd_lst)
