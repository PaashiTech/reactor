import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mmkvZustandStorage } from "../helpers/mmkvStorage";

import { UserState, UserActions } from "./models/user";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export const useUserStore = create<UserState & UserActions>()(
  immer(
    devtools(
      persist(
        (set, get) => ({
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
          setName: (newName) =>
            set((state) => {
              state.name = newName;
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
