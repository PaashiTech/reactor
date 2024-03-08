import { useFetch } from "../core/useFetch";

//////
// Get OTP
//////

type GetOTPQueryBody = {
  email: string;
  phone?: string;
  user_id: string;
};
type GetOTPQueryParams = {}; // placeholder
type GetOTPResponse = {
  session_id: string;
};
type GetOTPParams = GetOTPQueryBody & { startGet: boolean };

export const useGetOTP = () => {
  const { commonFetch, isLoading, data, status, error } =
    useFetch<GetOTPResponse>({
      url: `/otp/create`,
      method: "POST",
    });

  // using typescript to define the input here means no mistakes can be
  // made downstream when actually using our API layer
  const getOTP = (params: GetOTPQueryParams, body: GetOTPQueryBody) => {
    commonFetch({ params, body });
  };

  return {
    getOTP,
    getOTPIsLoading: isLoading,
    getOTPData: data,
    getOTPStatus: status,
    getOTPError: error,
  };
};

//////
// Validate OTP
//////

type ValidateOTPQueryBody = {
  otp: number;
  session_id: string;
};
type ValidateOTPQueryParams = {}; // placeholder
type ValidateOTPResponse = { status };
type ValidateOTPParams = ValidateOTPQueryBody & { startValidate: boolean };

export const useValidateOTP = () => {
  const { commonFetch, isLoading, data, status, error } =
    useFetch<ValidateOTPResponse>({
      url: `/otp/validate`,
      method: `POST`,
    });

  const validateOTP = (
    params: ValidateOTPQueryParams,
    body: ValidateOTPQueryBody
  ) => {
    commonFetch({ params, body });
  };

  return {
    validateOTP,
    validateOTPIsLoading: isLoading,
    validateOTPData: data,
    validateOTPStatus: status,
    validateOTPError: error,
  };
};
