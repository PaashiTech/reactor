import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

import { useUserStore, UserState } from "@unmaze/views";

const _get = (url) => axiosInstance.get(url).then((res) => res.data);

type GetUserQueryBody = {}; // placeholder
type GetUserQueryParams = {}; // placeholder
type GetUserParams = {
  id: string;
};

export const useUser = (params: GetUserParams) => {
  const setState = useUserStore((state) => state.setState);
  const { data, isLoading, error } = useSWR<{ data: UserState }>(
    `/user/${params.id}`,
    _get,
    {
      onSuccess: ({ data }) => {
        setState(data);
      },
    }
  );

  return {
    userData: data,
    userIsLoading: isLoading,
    userError: error,
  };
};
