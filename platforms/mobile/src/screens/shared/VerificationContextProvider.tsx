import { createContext, useContext, useState } from "react";

type VerificationContextProps = {
  phoneType: "primary" | "secondary";
  verifiedMessage: string;
  OTPSentTo: {
    type: string;
    value: string;
  };
  verifyTargetType: "existing" | "new";
  setPhoneType: (val: "primary" | "secondary") => void;
  setVerifiedMessage: (val: string) => void;
  setOTPSentTo: (val: { type: string; value: string }) => void;
  setVerifyTargetType: (val: "existing" | "new") => void;
};

const VerificationContext = createContext<VerificationContextProps>({
  phoneType: "primary",
  verifiedMessage: "",
  OTPSentTo: {
    type: "",
    value: "",
  },
  verifyTargetType: "existing",
  setPhoneType: () => {},
  setVerifiedMessage: () => {},
  setOTPSentTo: () => {},
  setVerifyTargetType: () => {},
});

interface VerificationContextProviderProps {
  children: React.ReactNode;
}

export const VerificationContextProvider: React.FC<
  VerificationContextProviderProps
> = ({ children }) => {
  const [phoneType, setPhoneType] = useState<"primary" | "secondary">(
    "primary"
  );
  const [verifiedMessage, setVerifiedMessage] = useState("placeholder");
  const [OTPSentTo, setOTPSentTo] = useState({
    type: "email",
    value: "",
  });
  const [verifyTargetType, setVerifyTargetType] = useState<"existing" | "new">(
    "existing"
  );

  return (
    <VerificationContext.Provider
      value={{
        phoneType,
        verifiedMessage,
        OTPSentTo,
        verifyTargetType,
        setPhoneType,
        setVerifiedMessage,
        setOTPSentTo,
        setVerifyTargetType,
      }}
    >
      {children}
    </VerificationContext.Provider>
  );
};

export const useVerificationContext = () => useContext(VerificationContext);
