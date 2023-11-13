'use client'
import React, { ReactNode } from 'react';
import './globals.css';
import { Inter } from 'next/font/google';
import AppTheme from '../components/AppTheme/AppTheme';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AppTheme>
                    {children}
                </AppTheme>
            </body>
        </html>
    );
};

export default RootLayout;
