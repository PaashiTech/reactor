import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mmkvZustandStorage } from "../helpers/mmkvStorage";

import { UserState, UserActions } from "./models/user";

export const useUserStore = create<UserState & UserActions>()(
  immer(
    devtools(
      persist(
        (set, get) => ({
          user_id: "",
          name: {
            first: "",
            middle: "",
            last: "",
          },
          dob: "", // ISO string
          pan: "",
          phone: {
            primary: "",
          },
          email: "",
          marital_status: "PreferNotToSay" as const,
          gender: "PreferNotToSay" as const,
          family: [],
          setState: (newState) =>
            set((state) => {
              for (const key in newState) {
                if (state.hasOwnProperty(key)) {
                  state[key] = newState[key];
                }
              }
            }),
        }),
        {
          name: "app-persist-storage",
          storage: createJSONStorage(() => mmkvZustandStorage),
        }
      )
    )
  )
);
