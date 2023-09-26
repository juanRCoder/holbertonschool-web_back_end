#!/usr/bin/env python3
""" Script that shows a random floating number between a given time"""
import random
import asyncio


async def wait_random(max_delay=10):
    """ function that shows a random floating """
    await asyncio.sleep(max_delay)
    return random.uniform(0, max_delay)
