import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';

export default function useAllCategories(name) {
    function getAllCategories() {
        return axios.get(`https://dummyjson.com/products/category/${name}`);
    }

    const res = useQuery({
        queryKey: ['categoriesListName', name],
        queryFn: getAllCategories,
    });
    return res
}
