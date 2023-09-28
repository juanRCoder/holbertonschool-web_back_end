#!/usr/bin/env python3
""" Script that return a list of floating randon numbers """
import asyncio
from typing import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ function that returns a list of floating random numbers n times """
    list_floats = [wait_random(max_delay) for _ in range(n)]

    delays = [await i for i in asyncio.as_completed(list_floats)]

    sorted_list = sorted(delays)

    return sorted_list
