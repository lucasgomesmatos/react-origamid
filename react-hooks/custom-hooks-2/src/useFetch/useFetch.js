import { useCallback, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (error) {
      json = null;
      setError(error);
    } finally {
      setLoading(false);
      setData(json);
    }
  }, []);

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useFetch;
