#!/usr/bin/env python3
""" Script that generates 10 random numbers every 1 second """
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """ generate random numbers waiting 1 second """
    for _ in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
