import { Torneo } from "@/types/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type UseTorneoState = {
  torneoList: Torneo[];
  setListTorneos: (torneos: Torneo[]) => void;
};

export const useTorneoState = create(
  persist<UseTorneoState>(
    (set, get) => ({
      torneoList: [],
      setListTorneos: (torneos) => set(() => ({ torneoList: torneos })),
    }),
    {
      name: "torneos",
    }
  )
);
