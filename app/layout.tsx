'use client';

import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';

const theme = createTheme();

export default function RootLayout({children,}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}