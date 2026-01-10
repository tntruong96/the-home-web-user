import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// User store
interface User {
  id: string;
  email: string;
  name: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,
        setUser: (user) =>
          set(
            {
              user,
              isAuthenticated: !!user,
            },
            false,
            "setUser"
          ),
        logout: () =>
          set(
            {
              user: null,
              isAuthenticated: false,
            },
            false,
            "logout"
          ),
      }),
      {
        name: "user-storage",
      }
    )
  )
);

// UI store
interface UIState {
  isLoading: boolean;
  sidebarOpen: boolean;
  setLoading: (loading: boolean) => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>()(
  devtools((set) => ({
    isLoading: false,
    sidebarOpen: false,
    setLoading: (loading) => set({ isLoading: loading }, false, "setLoading"),
    toggleSidebar: () =>
      set(
        (state) => ({ sidebarOpen: !state.sidebarOpen }),
        false,
        "toggleSidebar"
      ),
  }))
);
