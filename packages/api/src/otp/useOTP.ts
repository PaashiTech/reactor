import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

type GetOTPQueryBody = {
  email: string;
  user_id: string;
};
type GetOTPQueryParams = {}; // placeholder
type GetOTPParams = {
  email: string;
  user_id: string;
};

const fetcher = (url: string, body: GetOTPParams) =>
  axiosInstance
    .post(url, body, {
      // headers: {
      //   "Content-Type": "application/json",
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));

export const useGetOTP = ({ email, user_id }: GetOTPParams) => {
  let requestBody: GetOTPQueryBody = { email: email, user_id: user_id };

  const { data, isLoading, error } = useSWR(
    [`/otp/create`, requestBody],
    ([url, body]) => fetcher(url, body),
    {
      onError: (error, key) => {
        console.log(error);
      },
      shouldRetryOnError: false,
    }
  );

  return {
    createOTPData: data,
    createOTPIsLoading: isLoading,
    createOTPError: error,
  };
};
