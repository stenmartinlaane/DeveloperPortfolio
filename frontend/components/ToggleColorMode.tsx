'use client'
import { CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useEffect, useMemo, useState } from 'react'

export const ColorModeContext = createContext({ 
    toggleColorMode: () => {}
});

export default function ToggleColorMode({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const mq = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        if (mq.matches) {
          // setMode('dark');
          // TODO: add code back
        }
        setLoading(false)
      }, []);

    const colorMode = useMemo(
      () => ({
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }),
      [],
    );
  
    const lightTheme = useMemo(
      () =>
        createTheme({
          palette: {
            mode: 'light',
            background: {
                default: "#e4f0e2"
              }
          },
        }),
      [mode],
    );

    const darkTheme = useMemo(
        () =>
        createTheme({
            palette: {
                mode: 'dark',
                background: {
                    default: "#222222"
                    },
                text: {
                primary: "#ffffff"
                }
            }
        }),
        [mode],
    );
  
    if(loading) {
        return (<></>);
    } 
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        <CssBaseline></CssBaseline>
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }


