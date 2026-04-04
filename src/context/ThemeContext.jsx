import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  const defaultTheme = savedTheme
    ? (() => {
        try {
          const parsed = JSON.parse(savedTheme);
          return {
            mode: parsed.mode === 'dark' ? 'dark' : 'light',
          };
        } catch {
          // Handle legacy plain string storage
          return { mode: savedTheme === 'dark' ? 'dark' : 'light' };
        }
      })()
    : { mode: prefersDark ? 'dark' : 'light' };

  const [theme, setTheme] = useState(defaultTheme);

  const applyThemeClasses = (currentTheme) => {
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('dark', 'instagram');
    body.classList.remove('dark', 'instagram');

    // Always use Instagram palette theme by default
    root.classList.add('instagram');
    body.classList.add('instagram');

    if (currentTheme.mode === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    }
  };

  useEffect(() => {
    applyThemeClasses(theme);
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const toggleMode = () => {
    setTheme((prev) => ({
      ...prev,
      mode: prev.mode === 'dark' ? 'light' : 'dark',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
