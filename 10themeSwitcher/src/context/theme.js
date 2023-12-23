import React, { useContext } from "react";

export const ThemeContext = React.createContext()

export const ThemeProvider = ThemeContext.Provider

export function useTheme(){
    return useContext(ThemeContext)
}