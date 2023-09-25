#!/usr/bin/env python3
""" Script the return a value of the key """
from typing import Mapping, Any, TypeVar, Union, Optional


# Generic type
T = TypeVar('~T')


def safely_get_value(
        dct: Mapping[Any, Any],
        key: Any,
        default: Optional[T] = None
        ) -> Union[Any, T]:
    """ function that return a value of the key """
    if key in dct:
        return dct[key]
    else:
        return default
