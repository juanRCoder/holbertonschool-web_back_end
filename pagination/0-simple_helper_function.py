#!/usr/bin/env python3
""" Script that return a tuple with range of the list """


def index_range(page, page_size):
    """ return tuple that have first_"""
    start_index = (page - 1) * page_size
    last_index = page * page_size

    return (start_index, last_index)
