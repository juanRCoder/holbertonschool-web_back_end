#!/usr/bin/env python3
""" Script that returns the id of the new document """


def insert_school(mongo_collection, **kwargs):
    """ Inserts a new document in the collection based on kwargs """
    new_document = mongo_collection.insert_one(kwargs)

    return new_document.inserted_id
