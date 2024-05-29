import {
  BodyText,
  FormTextInput,
  UnmzGradientButton,
  View,
  ViewProps,
  YStack,
} from "@unmaze/views";
import {
  EMAIL_LOGIN_SCREEN_ID,
  EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID,
  EmailLoginScreenProps,
  SET_PASSWORD_SCREEN_ID,
} from "./types";
import { UnmzNavScreen } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LogoWithUnmaze } from "@unmaze/assets";
import { FieldValues, useForm } from "react-hook-form";
import KeyboardAvoidingViewWithDismiss from "../../components/shared/KeyboardAvoidingViewWithDismiss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Enter a valid email"),
});

type SchemaType = z.infer<typeof schema>;

const defaultValues: SchemaType = {
  email: "",
};

const _EmailLoginScreen: React.FC<EmailLoginScreenProps> = ({
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
  });

  const safeAreaInsets: ViewProps = {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  const handleNext = (data: SchemaType) => {
    // Further steps
    navigation.navigate(EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID, {
      email: data.email,
    });

    // navigation.navigate(SET_PASSWORD_SCREEN_ID);
  };
  return (
    <View flex={1} {...safeAreaInsets} bg="#FFF">
      <KeyboardAvoidingViewWithDismiss style={{ flex: 1 }}>
        <View
          flex={1}
          paddingTop={40}
          paddingBottom={16}
          paddingHorizontal={20}
          justifyContent="space-between"
        >
          <YStack gap={40}>
            <View alignSelf="center">
              <LogoWithUnmaze />
            </View>
            <FormTextInput
              label="Email Address"
              name="email"
              control={control}
              placeholder="eg. youremail@hotmail.com"
            />
          </YStack>
          <View>
            <YStack gap={12} alignItems="center">
              <BodyText size="sm" color="#6F6F6F">
                By continuing you agree with Unmaze's & Saafe's T&C
              </BodyText>
              <UnmzGradientButton
                alignSelf="stretch"
                disabled={!isDirty}
                onPress={handleSubmit(handleNext)}
              >
                Next
              </UnmzGradientButton>
            </YStack>
          </View>
        </View>
      </KeyboardAvoidingViewWithDismiss>
    </View>
  );
};

export const EmailLoginScreen: UnmzNavScreen = {
  key: EMAIL_LOGIN_SCREEN_ID,
  title: "Email Login Screen",
  content: _EmailLoginScreen,
};
