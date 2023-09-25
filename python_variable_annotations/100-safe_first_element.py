#!/usr/bin/env python3
""" Script that return first element of the list """
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, None]:
    """ fuction that return fisrt element or else None """
    if lst:
        return lst[0]
    else:
        return None
