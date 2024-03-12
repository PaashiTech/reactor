import { createContext, useContext, useState } from "react";

export enum OTPSentToType {
  EMAIL,
  PRIMARY_NUMBER,
  SECONDARY_NUMBER,
}

type VerificationContextProps = {
  phoneType: "primary" | "secondary";
  verifiedMessage: string;
  OTPSentTo: {
    type: OTPSentToType;
    value: string;
  };
  setPhoneType: (val: "primary" | "secondary") => void;
  setVerifiedMessage: (val: string) => void;
  setOTPSentTo: (val: { type: OTPSentToType; value: string }) => void;
};

const VerificationContext = createContext<VerificationContextProps>({
  phoneType: "primary",
  verifiedMessage: "",
  OTPSentTo: {
    type: OTPSentToType.EMAIL,
    value: "",
  },
  setPhoneType: () => {},
  setVerifiedMessage: () => {},
  setOTPSentTo: () => {},
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
    type: OTPSentToType.EMAIL,
    value: "",
  });

  return (
    <VerificationContext.Provider
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
    </VerificationContext.Provider>
  );
};

export const useVerificationContext = () => useContext(VerificationContext);
