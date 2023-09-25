#!/usr/bin/env python3
""" Script the return a tuple """
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[Union[str, float]]:
    """ function that return a tuple with str, int or float values """
    lst = [k, pow(v, 2)]
    return tuple(lst)
