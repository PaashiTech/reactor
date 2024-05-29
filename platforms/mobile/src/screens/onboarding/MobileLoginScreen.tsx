import {
  AccentText,
  BodyText,
  MobileNumberInput,
  UnmzGradientButton,
  View,
  ViewProps,
  YStack,
} from "@unmaze/views";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UnmzNavScreen } from "../types";
import {
  MOBILE_LOGIN_SCREEN_ID,
  MobileLoginScreenProps,
  OTP_MOBILE_LOGIN_SCREEN_ID,
} from "./types";
import { FieldValues, useForm } from "react-hook-form";
import KeyboardAvoidingViewWithDismiss from "../../components/shared/KeyboardAvoidingViewWithDismiss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  mobileNumber: z
    .string()
    .min(1, "Mobile number is required")
    .min(10, "Enter a valid phone number"),
});

type SchemaType = z.infer<typeof schema>;

const defaultValues: SchemaType = {
  mobileNumber: "",
};

const _MobileLoginScreen: React.FC<MobileLoginScreenProps> = ({
  navigation,
  route,
}) => {
  const insets = useSafeAreaInsets();

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const handleConfirm = (data: SchemaType) => {
    // Handle OTP API call here and naviate to OTP screen

    navigation.navigate(OTP_MOBILE_LOGIN_SCREEN_ID, {
      mobileNumber: data.mobileNumber,
    });
  };

  return (
    <View flex={1} {...safeAreaInsets} bg="#FFF">
      <KeyboardAvoidingViewWithDismiss style={{ flex: 1 }}>
        <View flex={1} paddingHorizontal={20} jc="space-between">
          <YStack gap={40} paddingVertical={24}>
            <YStack gap={12}>
              <AccentText size="lg">Enter your mobile number</AccentText>
              <BodyText color="#6F6F6F">
                The mobile number needs to be linked to your bank account.
              </BodyText>
            </YStack>
            <MobileNumberInput
              control={control}
              name="mobileNumber"
              showDeleteButton
            />
          </YStack>
          <View paddingVertical={16}>
            <UnmzGradientButton
              disabled={!isDirty}
              onPress={handleSubmit(handleConfirm)}
            >
              Confirm
            </UnmzGradientButton>
          </View>
        </View>
      </KeyboardAvoidingViewWithDismiss>
    </View>
  );
};

export const MobileLoginScreen: UnmzNavScreen = {
  key: MOBILE_LOGIN_SCREEN_ID,
  title: "Mobile Login",
  content: _MobileLoginScreen,
};
