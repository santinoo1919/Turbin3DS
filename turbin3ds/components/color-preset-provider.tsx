"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ColorPreset = "default" | "nature" | "forest" | "sunset" | "midnight";

type ColorPresetProviderProps = {
  children: React.ReactNode;
  defaultPreset?: ColorPreset;
  storageKey?: string;
};

type ColorPresetProviderState = {
  preset: ColorPreset;
  setPreset: (preset: ColorPreset) => void;
};

const initialState: ColorPresetProviderState = {
  preset: "default",
  setPreset: () => null,
};

const ColorPresetProviderContext =
  createContext<ColorPresetProviderState>(initialState);

export function ColorPresetProvider({
  children,
  defaultPreset = "default",
  storageKey = "ui-color-preset",
  ...props
}: ColorPresetProviderProps) {
  const [preset, setPreset] = useState<ColorPreset>(() =>
    typeof window !== "undefined"
      ? (localStorage.getItem(storageKey) as ColorPreset) || defaultPreset
      : defaultPreset
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(
      "preset-default",
      "preset-nature",
      "preset-forest",
      "preset-sunset",
      "preset-midnight"
    );
    root.classList.add(`preset-${preset}`);
  }, [preset]);

  const value = {
    preset,
    setPreset: (preset: ColorPreset) => {
      localStorage.setItem(storageKey, preset);
      setPreset(preset);
    },
  };

  return (
    <ColorPresetProviderContext.Provider {...props} value={value}>
      {children}
    </ColorPresetProviderContext.Provider>
  );
}

export const useColorPreset = () => {
  const context = useContext(ColorPresetProviderContext);

  if (context === undefined) {
    throw new Error("useColorPreset must be used within a ColorPresetProvider");
  }

  return context;
};
