#!/usr/bin/env python3
""" Script that return number x numbers random """
import asyncio
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """ function that return float number random list """
    float_list = [x async for x in async_generator()]
    return float_list
