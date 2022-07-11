import SfProWoff2 from './fonts/regular.woff2';
import { colors } from "./colors";
import { PaletteMode, ThemeOptions } from '@mui/material';

export const defaultThemeOptions = (themeMode: PaletteMode): ThemeOptions => ({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
                font-family: 'SfPro';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: url(${SfProWoff2}) format('woff2')';
            }
            `
        },
        MuiTypography: {
            defaultProps: {
                fontFamily: 'SfPro, sans-serif'
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
              inputRoot: {
                "&.MuiOutlinedInput-root .MuiAutocomplete-input": {
                  padding: "0px"
                }
              },
              input: {
                padding: "0px"
              }
            }
          }
    },
    typography: {
        allVariants: {
            fontFamily: `SfPro, sans-serif`,
            textTransform: 'none',
            fontSize: 16,
            color: themeMode === 'light' ? colors.gunmetal[800] : colors.gunmetal[100],
          },
        fontFamily: `SfPro, sans-serif`,
    },
    palette: {
        mode: themeMode,
        ...(themeMode === 'light') ? {
            primary: {
                main: colors.primary[500],
            },
            secondary: {
                main: colors.secondary[500],
            },
            success: {
                main: colors.green[500],
            },
            warning: {
                main: colors.yellow[500],
            },
            error: {
                main: colors.red[500],
            },
            info: {
                main: colors.blue[500],
            },
            action: {
                focus: colors.yellow[300],
            },
        } : {
            primary: {
                main: colors.primary[100],
            },
            secondary: {
                main: colors.secondary[100],
            },
            success: {
                main: colors.green[100],
            },
            warning: {
                main: colors.yellow[100],
            },
            error: {
                main: colors.red[100],
            },
            info: {
                main: colors.blue[100],
            },
            action: {
                focus: colors.yellow[100],
            },
        }
    }
})