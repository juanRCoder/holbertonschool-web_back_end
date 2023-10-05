#!/usr/bin/env python3
""" Script tht have class Server that page
    a database of popular baby names stored in a CSV file
"""
import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def index_range(self, page, page_size) -> Tuple:
        """ return tuple that have range index of the list
        """
        start_index = (page - 1) * page_size
        last_index = page * page_size

        return (start_index, last_index)

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ Returns the data page according to the parameters.
            if return an empty list
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # primera y ulima posicion de la pagina actual.
        first_index, last_index = self.index_range(page, page_size)

        # longitud de todos los datos en el archivo csv.
        data = self.dataset()
        data_size = len(data)

        if first_index > data_size or last_index > data_size:
            return []

        return data[first_index:last_index + 1]
