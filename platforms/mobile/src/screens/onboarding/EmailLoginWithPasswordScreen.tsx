import {
  AccentText,
  BodyText,
  FormTextInput,
  PasswordInput,
  UnmzGradientButton,
  View,
  ViewProps,
  YStack,
} from "@unmaze/views";
import {
  EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID,
  EmailLoginWithPasswordScreenProps,
} from "./types";
import { UnmzNavScreen } from "../types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LogoWithUnmaze } from "@unmaze/assets";
import { FieldValues, useForm } from "react-hook-form";
import KeyboardAvoidingViewWithDismiss from "../../components/KeyboardAvoidingViewWithDismiss";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .regex(EMAIL_REGEX, "Enter a valid email"),
  password: z
    .string()
    .min(8, "minimum 8 characters")
    .max(32, "maximum 32 characters"),
});

type SchemaType = z.infer<typeof schema>;

const _EmailLoginWithPasswordScreen: React.FC<
  EmailLoginWithPasswordScreenProps
> = ({ navigation, route }) => {
  const { email } = route.params;
  const defaultValues: SchemaType = {
    email: email,
    password: "",
  };
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
          <YStack>
            <View alignSelf="center">
              <LogoWithUnmaze />
            </View>
            <YStack mt={40} gap={32}>
              <FormTextInput
                label="Email Address"
                name="email"
                control={control}
                placeholder="eg. youremail@hotmail.com"
              />

              <PasswordInput
                label="Password"
                name="password"
                control={control}
                placeholder="8-32 characters"
              />
            </YStack>
            <View alignItems="flex-end">
              <AccentText
                mt={16}
                textAlign="right"
                color="#08BDBA"
                onPress={() => alert("Forgot Password")}
              >
                Forgot password
              </AccentText>
            </View>
          </YStack>
          <View>
            <YStack gap={12} alignItems="center">
              <UnmzGradientButton
                alignSelf="stretch"
                disabled={!isDirty}
                onPress={handleSubmit(handleNext)}
              >
                Login
              </UnmzGradientButton>
            </YStack>
          </View>
        </View>
      </KeyboardAvoidingViewWithDismiss>
    </View>
  );
};

export const EmailLoginWithPasswordScreen: UnmzNavScreen = {
  key: EMAIL_LOGIN_WITH_PASSWORD_SCREEN_ID,
  title: "Email Login Screen",
  content: _EmailLoginWithPasswordScreen,
};
