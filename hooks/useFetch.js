import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        url: "https://book-finder1.p.rapidapi.com/api/search",
        headers: {
            "X-RapidAPI-Key":
                "1d0e28a84bmsh473183a6a508d70p14fbb7jsnb4c21f814180",
            "X-RapidAPI-Host": "book-finder1.p.rapidapi.com"
        },
        // params: {
        //     // series: "Wings of fire",
        //     book_type: "Fiction",
        //     lexile_min: "600",
        //     lexile_max: "800",
        //     results_per_page: "25",
        //     page: "1"
        // }
        params: { categories: "Real Life", results_per_page: "25", page: "1" }
    };

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    };

    return { data, loading, error, refetch };
}

export default useFetch;
