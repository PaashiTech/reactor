import useSWR from "swr";
import { axiosInstance } from "../core/axiosProvider";

//////
// Get OTP
//////

type GetOTPQueryBody = {
  email: string;
  phone?: string;
  user_id: string;
};
type GetOTPQueryParams = {}; // placeholder
type GetOTPParams = GetOTPQueryBody;

const getOTPFetcher = (url: string, body: GetOTPQueryBody) =>
  axiosInstance
    .post(url, body, {
      // headers: {
      //   "Content-Type": "application/json",
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
    })
    .then((res) => res.data)
    .catch((err) => console.log(err));

/**
 * Hook for receiving an OTP on a given target
 * @param user_details Contains email, and optionally phone (due to limitations on Twilio);
 * and the user ID of the user
 * @returns {createOTPData, createOTPIsLoading, createOTPError} data, loading state and error
 * state of the get otp request to the server
 */
export const useGetOTP = (user_details: GetOTPParams) => {
  let requestBody: GetOTPQueryBody = {
    email: user_details.email,
    user_id: user_details.user_id!,
  };

  const { data, isLoading, error } = useSWR(
    [`/otp/create`, requestBody],
    ([url, body]) => getOTPFetcher(url, body),
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

//////
// Validate OTP
//////

type ValidateOTPQueryBody = {
  otp: string;
  session_id: string;
};
type ValidateOTPQueryParams = {}; // placeholder
type ValidateOTPParams = ValidateOTPQueryBody;

const validateOTPFetcher = (url: string, body: ValidateOTPQueryBody) =>
  axiosInstance
    .post(url, body)
    .then((res) => res.data)
    .catch((err) => console.log(err));

/**
 * Hook for validating the OTP received on a target
 * @param otp_session_details Contains the OTP and the session ID associated with that OTP
 * @returns {validateOTPData, validateOTPIsLoading, validateOTPError} data, loading state and
 * the error state of the validate OTP request sent to the server
 */
export const useValidateOTP = (otp_session_details: ValidateOTPParams) => {
  let requestBody: ValidateOTPQueryBody = {
    otp: otp_session_details.otp,
    session_id: otp_session_details.session_id,
  };

  const { data, isLoading, error } = useSWR(
    [`/otp/create`, requestBody],
    ([url, body]) => validateOTPFetcher(url, body),
    {
      onError: (error, key) => {
        console.log(error);
      },
      shouldRetryOnError: false,
    }
  );

  return {
    validateOTPData: data,
    validateOTPIsLoading: isLoading,
    validateOTPError: error,
  };
};
