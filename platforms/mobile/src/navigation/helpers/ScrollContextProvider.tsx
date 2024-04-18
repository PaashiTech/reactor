import React, { createContext, useContext, useState } from "react";

type ScrollContextType = {
  scrollDirection: "up" | "down" | null;
  setScrollDirection: React.Dispatch<
    React.SetStateAction<"up" | "down" | null>
  >;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollDirection: null,
  setScrollDirection: () => {},
});

export const ScrollContextProvider = ({ children }) => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );

  return (
    <ScrollContext.Provider value={{ scrollDirection, setScrollDirection }}>
      {children}
    </ScrollContext.Provider>
  );
};
export const useScrollContext = () => useContext(ScrollContext);
