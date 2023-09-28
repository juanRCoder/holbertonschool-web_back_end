#!/usr/bin/env python3
""" Script that create a async function """
import asyncio


wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """ Function that creates an asynchronous task from wrapping """
    async def wrapping():
        """ wrapping of the async function """
        return await wait_random(max_delay)

    return asyncio.create_task(wrapping())
