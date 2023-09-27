#!/usr/bin/env python3
""" Script that shows a random floating number between a given time"""
import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """ function that shows a random floating """
    value = random.uniform(0, max_delay)
    await asyncio.sleep(max_delay)
    return value
