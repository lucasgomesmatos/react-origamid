import React, { useCallback, useState } from "react";

const useFetch = () => {
  const [dados, setDados] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const request = useCallback(async (url, form) => {

    try {
      setLoading(true);
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      data.ok ? setDados(true) : setDados(false)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    request,
    dados,
    error,
    loading
  };
};

export default useFetch;
