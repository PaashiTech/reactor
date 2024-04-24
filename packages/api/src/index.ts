/**
 * The package that provides an API layer to all the packages.
 *
 * @package api
 */

// Config providers
export { APIGlobalConfigProvider } from "./core/APIGlobalConfigProvider";

// API hooks
export { useGetUser, useUpdateUser } from "./user/useUser";
export { useGetFamily, useAddFamilyMember } from "./user/useFamily";
export { useGetOTP, useValidateOTP } from "./otp/useOTP";
