import {
  ProfileDetails,
  ProfileDetailsProps,
  BottomModal,
  UnmzGradientButton,
  View,
  Text,
  XStack,
  useUserStore,
  UserState,
  computeUserFullName,
  computeDoBString,
} from "@unmaze/views";
import {
  ProfileDetailsScreenProps,
  PROFILE_DETAILS_SCREEN_ID,
  EDIT_PH_NUMBER_SCREEN_ID,
  EDIT_EMAIL_SCREEN_ID,
  ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID,
} from "./types";
import { OTP_ACCOUNT_VERIFICATION_SCREEN_ID } from "../shared";

import { useState } from "react";
import { UnmzNavScreen } from "../types";
import { ChevronRight } from "@unmaze/assets";
import { Pressable } from "react-native";
import { useStackContext } from "../../navigation/navigators/stackContext/StackContextProvider";
import { OTPSentToType } from "../../navigation/navigators/stackContext/utility.types";

const _ProfileDetailsScreen: React.FC<ProfileDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const user: UserState = useUserStore((state) => state);

  const [warningModal, setWarningModal] = useState<boolean>(false);
  const [editType, setEditType] = useState<"email" | "primary" | "secondary">(
    "email"
  );
  const { dispatch } = useStackContext();

  const profile: ProfileDetailsProps = {
    name: computeUserFullName(user.name),
    dob: computeDoBString(user.dob),
    pan: user.pan,
    primaryPhone: "+91 - " + user.phone.primary,
    secondaryPhone: user.phone.secondary
      ? "+91 - " + user.phone.secondary
      : null,
    gender: user.gender,
    email: user.email,
    maritalStatus: user.marital_status,
    onEditPrimaryPhone: () => {
      setEditType("primary");
      setWarningModal(true);
    },
    onEditSecondaryPhone: () => {
      setEditType("secondary");
      setWarningModal(true);
    },
    onEditEmail: () => {
      setEditType("email");
      setWarningModal(true);
    },
  };

  return (
    <View flex={1}>
      <ProfileDetails {...profile} />

      {/* To add secondary phone number if not present */}

      {!profile.secondaryPhone && (
        <Pressable
          onPress={() => {
            dispatch({ type: "SET_PHONE_TYPE", payload: "secondary" });
            navigation.navigate(ADD_SECONDARY_PHONE_NUMBER_SCREEN_ID);
          }}
        >
          <XStack
            paddingHorizontal={20}
            alignItems="center"
            paddingVertical={12}
            gap={4}
            bg="#fff"
            paddingBottom={22}
          >
            <Text color="#009D9A" fontWeight={"600"}>
              Add secondary number
            </Text>
            <View mt={3}>
              <ChevronRight width={16} height={16} />
            </View>
          </XStack>
        </Pressable>
      )}

      {/* Verification warning modal */}
      <BottomModal
        open={warningModal}
        setOpen={setWarningModal}
        contentStyle={{
          paddingVertical: 24,
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <View flex={1} gap={4}>
          <Text
            fontSize={16}
            fontWeight={"600"}
            letterSpacing={0.32}
            color={"#262626"}
          >
            Update{" "}
            {editType === "email"
              ? `${editType} address`
              : `${editType} number`}
            ?
          </Text>
          <Text fontSize={12} letterSpacing={0.24}>
            To edit your {editType === "email" ? "email" : "number"}, verify
            your account by entering the OTP sent to{" "}
            {editType === "email" ? profile.primaryPhone : profile.email}
          </Text>
        </View>
        <UnmzGradientButton
          onPress={() => {
            setWarningModal(false);

            editType === "email"
              ? (() => {
                  dispatch({
                    type: "SET_OTP_SENT_TO",
                    payload: {
                      type: OTPSentToType.PRIMARY_NUMBER,
                      value: profile.primaryPhone,
                    },
                  });
                  navigation.navigate(OTP_ACCOUNT_VERIFICATION_SCREEN_ID, {
                    confirmScreenId: EDIT_EMAIL_SCREEN_ID,
                  });
                })()
              : (() => {
                  dispatch({
                    type: "SET_OTP_SENT_TO",
                    payload: {
                      type: OTPSentToType.EMAIL,
                      value: profile.email,
                    },
                  });
                  dispatch({ type: "SET_PHONE_TYPE", payload: editType });
                  navigation.navigate(OTP_ACCOUNT_VERIFICATION_SCREEN_ID, {
                    confirmScreenId: EDIT_PH_NUMBER_SCREEN_ID,
                  });
                })();
          }}
        >
          Continue
        </UnmzGradientButton>
      </BottomModal>
    </View>
  );
};

export const ProfileDetailsScreen: UnmzNavScreen = {
  key: PROFILE_DETAILS_SCREEN_ID,
  title: "Profile Details",
  content: _ProfileDetailsScreen,
};
