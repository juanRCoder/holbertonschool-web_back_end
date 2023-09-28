#!/usr/bin/env python3
""" Script that return a list of floating randon numbers """
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ function that returns a list of floating random numbers n times """
    list_floats = [await wait_random(max_delay) for _ in range(n)]

    sorted_list = sorted(list_floats)

    return sorted_list
