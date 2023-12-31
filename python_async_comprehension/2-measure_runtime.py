#!/usr/bin/env python3
""" Async Comprehension """
import asyncio
import time


async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ return time total of the execution of asyn_comprehension 4 times """
    start_time = time.time()

    await asyncio.gather(*[async_comprehension() for _ in range(4)])

    end_time = time.time()
    total_time = end_time - start_time

    return total_time
