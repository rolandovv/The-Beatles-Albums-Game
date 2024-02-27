import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchAlbums = (requestMethod, url, params) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {       
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios[requestMethod](url, params);
        setData(response.data.albums);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // Clean up function
    return () => {
      // Abort ongoing requests if needed
    };
  }, [requestMethod, url, params ]);

  return { data, error, loading };
};

export default useFetchAlbums;

