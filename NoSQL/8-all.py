#!/usr/bin/env python3
""" Script that list all documents in a collection """


def list_all(mongo_collection):
    """ function that return all documents in a collection """
    all_documents = [doc for doc in mongo_collection.find()]

    return all_documents
