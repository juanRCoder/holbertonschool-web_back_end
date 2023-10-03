#!/usr/bin/env python3
""" Script that updated all documents that have name how attribute"""


def update_topics(mongo_collection, name, topics):
    """ Updates all topics in a school document based on name """
    update = mongo_collection.update_many(
            {"name": name},
            {"$set" : {"topics": topics}})
