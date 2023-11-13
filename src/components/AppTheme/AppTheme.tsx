import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

interface Theme {
  colors: {
    fontColor: string;
    secondaryFontColor: string;
    divider: string;
    containerColor: string;
  };
  borderRadius: string;
}

interface AppProps {
  children: ReactNode;
}

const theme: Theme = {
    colors: {
        fontColor: '#000',
        secondaryFontColor: 'rgb(100, 116, 139)',
        divider: 'rgb(229, 231, 235)',
        containerColor: '#fff',
    },
    borderRadius: '2px',
};

function AppTheme({ children }: AppProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppTheme;
