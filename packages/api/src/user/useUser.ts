import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

import { useUserStore, UserState } from "@unmaze/views";

const _get = (url) => axiosInstance.get(url).then((res) => res.data);
const _patch = (url) => axiosInstance.patch(url).then((res) => res.data);

//////
// Get User
//////

type GetUserQueryBody = {}; // placeholder
type GetUserQueryParams = {}; // placeholder
type GetUserParams = {
  id: string;
};

/**
 * Hook to get the User details, given the User ID
 * @param params Contains User ID
 * @returns {userData, userIsLoading, userError} data, loading and error states
 * of the user data retrieval request sent to the server
 */
export const useUser = (params: GetUserParams) => {
  const setState = useUserStore((state) => state.setState);
  const { data, isLoading, error, mutate } = useSWR<{ data: UserState }>(
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
    userMutate: mutate,
  };
};

//////
// Update User
//////

type UpdateUserQueryBody = Partial<UserState> & {
  otp: string;
  session_id: string;
};
type UpdateUserQueryParams = {};
type UpdateUserParams = {
  id: string;
  otp: string;
  session_id: string;
  user_details: Partial<UserState>;
};

/**
 * Hook to update the protected fields of remote resource User
 * @param params Contain OTP, session ID associated with that OTP and properties
 * to be changed of the remote resource User
 * @returns {userUpdateData, userUpdateIsLoading, userUpdateError, userUpdateMutate}
 * response data, loading state, error state and the function to be called after the
 * request returns successfully
 */
export const useUpdateUser = (params: UpdateUserParams) => {
  // const setState = useUserStore((state) => state.setState);
  const { userMutate } = useUser({ id: params.id });
  const { data, isLoading, error } = useSWR(`/user/${params.id}`, _patch, {
    onSuccess: () => {
      userMutate();
    },
  });

  return {
    userUpdateData: data,
    userUpdateIsLoading: isLoading,
    userUpdateError: error,
  };
};
