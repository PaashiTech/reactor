import useSWR from "swr";
// const axios = require("axios").default;
import { axiosInstance } from "../core/axiosProvider";

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

type GetUserInput = {};
type GetUserParams = {
  id: string;
};

export const useUser = (params: GetUserParams) => {
  const { data, isLoading, error } = useSWR(`/user/${params.id}`, fetcher);

  return {
    userData: data,
    userIsLoading: isLoading,
    userError: error,
  };
};
