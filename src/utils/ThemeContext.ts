import React from 'react';

interface ThemeContext {
  theme: 'light' | 'dark';
  toggleTheme?: () => void;
}

const defaultContext: ThemeContext = {
  theme: 'dark',
};

export const ThemeContext = React.createContext(defaultContext);
