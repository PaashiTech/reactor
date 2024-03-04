import { create } from "zustand";
import { persist, devtools, createJSONStorage } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { mmkvZustandStorage } from "./mmkvStorage";

type TestState = {
  testNumber: number;
};

type TestActions = {
  increase: (by: number) => void;
  decrease: (by: number) => void;
};

export const useTestStore = create<TestState & TestActions>()(
  // immer(
  devtools(
    persist(
      (set) => ({
        testNumber: 0,
        increase: (by: number) => {
          set((state) => ({ testNumber: state.testNumber + by }));
        },
        decrease: (by: number) => {
          set((state) => ({ testNumber: state.testNumber - by }));
        },
      }),
      {
        name: "app-persist-storage",
        storage: createJSONStorage(() => mmkvZustandStorage),
      }
    )
  )
  // )
);
