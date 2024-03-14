import { useState } from "react";
import { axiosInstance } from "./axiosProvider";

type UseFetchProps = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
};

type CommonFetch = {
  /** Parameters for the request */
  params?: { [index: string]: string } | null;
  /** the variables that the endpoint expects to receive */
  body?: { [index: string]: unknown } | null;
  /** this allows you to override any default fetch options on a 
  case by case basis. think of it like an escape hatch. */
  fetchOptions?: RequestInit;
};

// <T> turns this into a generic component. We will take advantage of this
// by assigning the `data` variable the type T.
export function useFetch<TState>({ url, method }: UseFetchProps) {
  const [isLoading, setIsLoading] = useState(false);
  // we are assigning the generic type T to our data value here
  // This is the type of the payload that is going to be returned by this API.
  const [data, setData] = useState<TState | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const commonFetch = async ({ params, body }: CommonFetch) => {
    setIsLoading(true);

    try {
      const { data, status } = await axiosInstance.request({
        url: url,
        method: method,
        params: params,
        data: body,
      });

      setStatus(status);
      setData(data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);

        setStatus(error.response.status);
        setError(error.response.data);
        setData(null);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.response.data);
      }
    }

    setIsLoading(false);
  };

  return { commonFetch, isLoading, data, status, error };
}
