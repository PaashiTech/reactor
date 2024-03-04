import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

type GetOTPInput = {};
type GetOTPParams = {};

export const useGetOTP = (params: GetOTPParams) => {
  const { data, isLoading, error } = useSWR(`/otp/create`, fetcher);

  return {
    otpData: data,
    otpIsLoading: isLoading,
    otpError: error,
  };
};
