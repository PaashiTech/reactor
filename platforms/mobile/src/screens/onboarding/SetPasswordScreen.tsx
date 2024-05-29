import { PasswordInput, UnmzGradientButton, View, YStack } from "@unmaze/views";
import {
  OTP_CREATE_PASSWORD_SCREEN_ID,
  SET_PASSWORD_SCREEN_ID,
  SetPasswordScreenProps,
} from "./types";
import { UnmzNavScreen } from "../types";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PasswordInfo } from "../../components/app/onboarding/setPasswordScreen/PasswordInfo";
import { Keyboard } from "react-native";

const schema = z
  .object({
    password: z
      .string()
      .min(8, "minimum 8 characters")
      .max(32, "maximum 32 characters")
      .regex(/[A-Z]/, "Must have at least one uppercase letter.")
      .regex(/[a-z]/, "Must have at least one lowercase letter.")
      .regex(/[0-9]/, "Must contain at least one number.")
      .regex(
        /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/,
        "Must contain at least one special character."
      ),
    confirmPassword: z
      .string()
      .min(8, "minimum 8 characters")
      .max(32, "maximum 32 characters")
      .regex(/[A-Z]/, "Must have at least one uppercase letter.")
      .regex(/[a-z]/, "Must have at least one lowercase letter.")
      .regex(/[0-9]/, "Must contain at least one number.")
      .regex(
        /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/,
        "Must contain at least one special character."
      ),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords don't match!",
    path: ["confirmPassword"],
  });

type SchemaType = z.infer<typeof schema>;

const _SetPasswordScreen: React.FC<SetPasswordScreenProps> = ({
  navigation,
  route,
}) => {
  const defaultValues: SchemaType = {
    password: "",
    confirmPassword: "",
  };

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FieldValues>({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const handleNext = (data: SchemaType) => {
    // Further steps
    navigation.navigate(OTP_CREATE_PASSWORD_SCREEN_ID);
  };
  return (
    <View flex={1} bg="#FFF" onPress={() => Keyboard.dismiss()}>
      <View
        flex={1}
        paddingBottom={16}
        paddingHorizontal={20}
        justifyContent="space-between"
        paddingTop={40}
      >
        <YStack flex={1}>
          <YStack gap={32}>
            <PasswordInput
              label="Password"
              name="password"
              control={control}
              placeholder="8-32 characters"
            />

            <PasswordInput
              label="Confirm Password"
              name="confirmPassword"
              control={control}
              placeholder="8-32 characters"
            />
          </YStack>
          <View mt="auto" mb={24}>
            <PasswordInfo />
          </View>
        </YStack>

        <UnmzGradientButton
          alignSelf="stretch"
          disabled={!isDirty}
          onPress={handleSubmit(handleNext)}
        >
          Send OTP
        </UnmzGradientButton>
      </View>
    </View>
  );
};

export const SetPasswordScreen: UnmzNavScreen = {
  key: SET_PASSWORD_SCREEN_ID,
  title: "Set Password",
  content: _SetPasswordScreen,
};
