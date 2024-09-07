import React, { createContext, ReactNode, useEffect } from "react";
import { defaultTheme, IFlTheme } from "../assets/theme.ts";

export interface ThemeContextType {
  theme: IFlTheme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const theme = defaultTheme;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--fl-primary", theme.primary);
    root.style.setProperty("--fl-secondary", theme.secondary);
    root.style.setProperty("--fl-accent", theme.accent);
    root.style.setProperty("--fl-alt", theme.alt);
    root.style.setProperty("--fl-background", theme.background);
    root.style.setProperty("--fl-text", theme.text);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
