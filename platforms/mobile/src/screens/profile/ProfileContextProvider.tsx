import { createContext, useContext, useState } from "react";

type ProfileContextProps = {
  phoneType: "primary" | "secondary";
  verifiedMessage: string;
  OTPSentTo: {
    type: string;
    value: string;
  };
  setPhoneType: React.Dispatch<React.SetStateAction<"primary" | "secondary">>;
  setVerifiedMessage: React.Dispatch<React.SetStateAction<string>>;
  setOTPSentTo: React.Dispatch<
    React.SetStateAction<{ type: string; value: string }>
  >;
};

const ProfileContext = createContext<ProfileContextProps>({
  phoneType: "primary",
  verifiedMessage: "",
  OTPSentTo: {
    type: "",
    value: "",
  },
  setPhoneType: () => {},
  setVerifiedMessage: () => {},
  setOTPSentTo: () => {},
});

interface ProfileContextProviderProps {
  children: React.ReactNode;
}

export const ProfileContextProvider: React.FC<ProfileContextProviderProps> = ({
  children,
}) => {
  const [phoneType, setPhoneType] = useState<"primary" | "secondary">(
    "primary"
  );

  const [verifiedMessage, setVerifiedMessage] = useState("placeholder");

  const [OTPSentTo, setOTPSentTo] = useState({
    type: "email",
    value: "",
  });
  return (
    <ProfileContext.Provider
      value={{
        phoneType,
        verifiedMessage,
        OTPSentTo,
        setPhoneType,
        setVerifiedMessage,
        setOTPSentTo,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
