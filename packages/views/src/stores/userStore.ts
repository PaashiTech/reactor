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
          getFullName: () => {
            return get().name.first + " " + get().name.middle
              ? get().name.middle
              : "" + " " + get().name.last;
          },
          getDoBFormatted: () => {
            let _dateObj = new Date(get().dob);
            set((state) => {
              state.dobObj = _dateObj;
            });
            return (
              _dateObj.getDate() +
              "-" +
              months[_dateObj.getMonth()] +
              "-" +
              _dateObj.getFullYear()
            );
          },
          getPrimaryPhone: () => {
            return "+91 - " + get().phone.primary;
          },
          getSecondaryPhone: () => {
            return get().phone.secondary
              ? "+91 - " + get().phone.secondary
              : "";
          },
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
