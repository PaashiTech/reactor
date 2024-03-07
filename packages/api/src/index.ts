/**
 * The package that provides an API layer to all the packages.
 *
 * @package api
 */

// Config providers
export { APIGlobalConfigProvider } from "./core/APIGlobalConfigProvider";

// API hooks
export { useUser } from "./user/useUser";
export { useCreateOTP } from "./otp/useOTP";
