/* eslint-disable */
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(resource) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getResource = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(resource);
      setResult(data);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResource();
  }, [resource]);

  return {
    result,
    loading,
    error,
  };
}
