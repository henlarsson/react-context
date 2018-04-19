import React from 'react';


export const themes = {
  blue: {
    foreground: 'blue',
    background: 'blue',
  },
  red: {
    foreground: 'red',
    background: 'red',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.red, // default value,
  toggleTheme: () => { console.log("default") },
});