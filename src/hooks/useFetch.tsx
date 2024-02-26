import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type RequestMethod = "GET" | "POST";

const useFetch = <T,>(
  url: string,
  method: RequestMethod = "GET",
  body?: any
): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const options: RequestInit = {
          method,
          headers: { "Content-Type": "application/json" },
        };

        if (method === "POST" && body) {
          options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (error) {
        setError("An error occured");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to abort fetch on unmount
    return () => {
      // Abort controller for cancelling fetch request
      const abortController = new AbortController();
      abortController.abort();
    };
  }, [url, method, body]);

  return { data, loading, error };
};

export default useFetch;
