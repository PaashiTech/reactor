import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

import { useUserStore, UserState } from "@unmaze/views";
import { useFetch } from "../core/useFetch";
import { RelationshipType } from "platforms/mobile/src/components/app/family";

const _get = (url) => axiosInstance.get(url).then((res) => res.data);

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
export const useGetUser = (params: GetUserParams) => {
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
  otp: number;
  session_id: string;
};
type UpdateUserQueryParams = {};
type UpdateUserResponse = { status: number };
type UpdateUserParams = {
  id: string;
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
  const { commonFetch, isLoading, data, status, error } =
    useFetch<UpdateUserResponse>({
      url: `/user/${params.id}`,
      method: "PATCH",
    });

  const updateUser = (
    params: UpdateUserQueryParams,
    body: UpdateUserQueryBody
  ) => {
    commonFetch({ params, body });
  };

  return {
    updateUser,
    updateUserIsLoading: isLoading,
    updateUserData: data,
    updateUserStatus: status,
    updateUserError: error,
  };
};

//////
// Add Family User
//////

type AddFamilyMemberQueryBody = {
  name: {
    first: string;
    last: string;
  };
  relationship: RelationshipType | undefined;
  dob: Date | undefined;
  phone: string;
};
type AddFamilyMemberQueryParams = {};
type AddFamilyMemberResponse = { status: number };
type AddFamilyMemberParams = {
  id: string;
};

export const useAddFamilyMember = (params: AddFamilyMemberParams) => {
  const { commonFetch, isLoading, data, status, error } =
    useFetch<AddFamilyMemberResponse>({
      url: `/user/${params.id}/family`,
      method: "POST",
    });

  const addFamilyMember = (args: {
    params: AddFamilyMemberQueryParams;
    body: AddFamilyMemberQueryBody;
    onSuccess?: () => void;
    onError?: () => void;
  }) => {
    commonFetch(args);
  };

  return {
    addFamilyMember,
    addFamilyMemberIsLoading: isLoading,
    addFamilyMemberData: data,
    addFamilyMemberStatus: status,
    addFamilyMemberError: error,
  };
};
