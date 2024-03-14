import { StackActions, StackState } from "./stackContext.types";

/**
 * 
 *  Example to add more actions in the reducer
 * 
 *  case "SET_SOMETHING": 
      return {
        ...state,
        phoneType: action.payload
      }
 */

export const reducer = (
  state: StackState,
  action: StackActions
): StackState => {
  switch (action.type) {
    case "SET_PHONE_TYPE":
      return {
        ...state,
        profile: {
          ...state.profile,
          phoneType: action.payload,
        },
      };

    case "SET_VERIFIED_MESSAGE":
      return {
        ...state,
        shared: {
          ...state.shared,
          verifiedMessage: action.payload,
        },
      };

    case "SET_OTP_SENT_TO":
      return {
        ...state,
        shared: {
          ...state.shared,
          OTPSentTo: action.payload,
        },
      };

    default:
      return state;
  }
};
