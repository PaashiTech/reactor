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

// Caveat: Axios does not allow sending JSON body with a GET request. Hence, using fetch.
// Ref. - https://axios-http.com/docs/req_config#:~:text=//%20%60data%60%20is%20the,only%3A%20Stream%2C%20Buffer
const fetcher = (url: string, body: GetOTPQueryBody) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(body), // body data type must match "Content-Type" header
  }).then((res) => res.json());

export const useCreateOTP = ({ email, user_id }: GetOTPParams) => {
  const { data, isLoading, error } = useSWR(
    [`/otp/create`, { email: email, user_id: user_id }],
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
