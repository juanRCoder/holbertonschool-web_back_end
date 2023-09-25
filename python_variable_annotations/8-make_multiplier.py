#!/usr/bin/env python3
""" Script that return a number multiplied by itself """
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ create and return a multiplier function """

    def multiplier_function(x: float) -> float:
        """ Multiply a float by given multiplier """
        return multiplier * x

    return multiplier_function
