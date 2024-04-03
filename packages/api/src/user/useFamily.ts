import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

import { useUserStore } from "@unmaze/views";
import { useFetch } from "../core/useFetch";
import { RelationshipType } from "platforms/mobile/src/components/app/family";
import { Invitation, FamilyMember } from "@unmaze/views";

const _get = (url) => axiosInstance.get(url).then((res) => res.data);

//////
// Get Family of User
//////

type GetFamilyQueryBody = {};
type GetFamilyQueryParams = {};
type GetFamilyParams = {
  id: string;
};
type GetFamilyResponse = {
  invitations: {
    sent: Invitation[];
    received: Invitation[];
  };
  family: ({
    invitation_id: string;
  } & FamilyMember)[];
};

/**
 * Hook to get the family member details from the user, given the User ID
 * @param params Contains User ID
 * @returns {userData, userIsLoading, userError} data, loading and error states
 * of the user data retrieval request sent to the server
 */
export const useGetFamily = (params: GetFamilyParams) => {
  const setState = useUserStore((state) => state.setState);
  const { data, isLoading, error, mutate } = useSWR<{
    data: GetFamilyResponse;
  }>(`/user/${params.id}/family`, _get, {
    onSuccess: ({ data }) => {
      setState(data);
    },
  });

  return {
    familyData: data,
    familyIsLoading: isLoading,
    familyError: error,
    familyMutate: mutate,
  };
};

//////
// Add Family Member
//////

type AddFamilyMemberQueryBody = {
  name: {
    first: string;
    last: string;
  };
  relationship: RelationshipType | undefined;
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
