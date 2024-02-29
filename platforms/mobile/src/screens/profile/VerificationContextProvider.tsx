import { createContext, useContext, useState } from "react";

type VerificationContextProps = {
  phoneType: "primary" | "secondary";
  verifiedMessage: string;
  OTPSentTo: {
    type: string;
    value: string;
  };
  setPhoneType: (val: "primary" | "secondary") => void;
  setVerifiedMessage: (val: string) => void;
  setOTPSentTo: (val: { type: string; value: string }) => void;
};

const VerificationContext = createContext<VerificationContextProps>({
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
