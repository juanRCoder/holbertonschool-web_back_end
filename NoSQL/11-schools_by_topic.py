#!/usr/bin/env python3
""" Script that have function that return a list of the documents"""


def schools_by_topic(mongo_collection, topic):
    """ function that returns the list of school having a specific topic """
    col = mongo_collection.find({"topics": topic})
    list_school = [doc for doc in col]

    return list_school
