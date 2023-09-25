#!/usr/bin/env python3
"""
    Script returns a list of tuples containing string text
    and the number of characters
"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ function that returns a list of tuples """
    return [(i, len(i)) for i in lst]
