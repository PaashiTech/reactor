import { OTPSentToType, PhoneType } from "./utility.types";

/**
 * Context State
 *
 * Add all the new state parameters in the following state type
 */

export type StackState = {
  profile: {
    phoneType: PhoneType;
  };
  shared: {
    verifiedMessage: string;
    OTPSentTo: {
      type: OTPSentToType;
      value: string;
    };
  };
};

/**
 * Context Actions
 *
 * 1. While adding a new action, declare a new type with "type"
 * set as the action name (eg. "SET_PHONE_TYPE")
 *
 * 2. Add the newly created type to the StackActions type as a union
 * 
 * For eg.
 * type SetSomethingAction = {
    type: "SET_SOMETHING";
    payload: "value1" | "value2";
    };
 */

type SetPhoneTypeAction = {
  type: "SET_PHONE_TYPE";
  payload: PhoneType;
};

type SetVerifiedMessage = {
  type: "SET_VERIFIED_MESSAGE";
  payload: string;
};

type SetOTPSentTo = {
  type: "SET_OTP_SENT_TO";
  payload: {
    type: OTPSentToType;
    value: string;
  };
};

export type StackActions =
  | SetPhoneTypeAction
  | SetVerifiedMessage
  | SetOTPSentTo;
