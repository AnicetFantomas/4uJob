import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "d3ffe6493cmsh0192193f66447a0p19db8fjsn6c0d8490cf4c",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
        ...query
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
        const response = await axios.request(options);
        // console.log(response);
        setData(response.data.data);
        setIsLoading(false);
    } catch (error) {
        setError(error);
        alert("Something went wrong");
    } finally {
        setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  }

  return { data, isLoading, error, refetch };
 
};

export default useFetch;