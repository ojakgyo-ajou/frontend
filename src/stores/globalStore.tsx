import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  theme: 'light' | 'dark';
};

type Action = {
  setTheme: (theme: State['theme']) => void;
};

export const useGlobalStore = create<State & Action>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (newTheme) => {
        set({ theme: newTheme });
        if (typeof window !== 'undefined') {
          document.documentElement.setAttribute('data-theme', newTheme);
        }
      },
    }),
    {
      name: 'globalStorage',
    }
  )
);

if (typeof window !== 'undefined') {
  const currentTheme = useGlobalStore.getState().theme;
  document.documentElement.setAttribute('data-theme', currentTheme);
}
