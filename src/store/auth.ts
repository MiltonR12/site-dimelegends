import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  username: string;
  token: string;
  isAllow: boolean;
  login: (token: string, username: string) => void;
  restablecer: () => void;
}

export const useTokenStore = create(
  persist<User>(
    (set, get) => ({
      isAllow: false,
      username: "",
      token: "",
      login: (token, username) => set({ token, username, isAllow: true }),
      restablecer: () => set({ token: "", username: "", isAllow: false }),
    }),
    {
      name: "usuario",
    }
  )
);
