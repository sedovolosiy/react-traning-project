import { createTheme } from "@mui/material/styles";

// Create custom Material-UI theme with comprehensive accessibility enhancements
// Following official Material-UI accessibility guidelines
const theme = createTheme({
  palette: {
    primary: {
      main: "#5f59f7", // Enhanced contrast for better accessibility
      light: "#8b5cf6",
      dark: "#4c46d6", // Darker for better contrast
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#e91e63", // Enhanced contrast
      light: "#f472b6",
      dark: "#c2185b", // Darker for better contrast
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f", // Standard Material-UI error with good contrast
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ed6c02", // Enhanced contrast
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32", // Enhanced contrast for success color
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    background: {
      default: "#fafafa", // Slightly better contrast than pure white
      paper: "#ffffff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)", // Material-UI recommended high contrast
      secondary: "rgba(0, 0, 0, 0.6)", // Better contrast than previous value
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    // Enhanced divider color for better visibility
    divider: "rgba(0, 0, 0, 0.12)",
  },
  typography: {
    // Using Roboto as recommended by Material-UI accessibility guidelines
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    // Enhanced typography scale following Material Design accessibility standards
    // All sizes use rem units for better user accessibility preferences support
    h1: {
      fontWeight: 300, // Light weight for large headings as per Material Design
      fontSize: "3rem", // 48px - Main page heading
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      "@media (min-width:600px)": {
        fontSize: "3.75rem", // 60px on larger screens
      },
    },
    h2: {
      fontWeight: 300, // Light weight for large headings
      fontSize: "2.125rem", // 34px - Section headings
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      "@media (min-width:600px)": {
        fontSize: "2.5rem", // 40px on larger screens
      },
    },
    h3: {
      fontWeight: 400, // Regular weight for medium headings
      fontSize: "1.75rem", // 28px - Subsection headings
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontWeight: 400, // Regular weight
      fontSize: "1.5rem", // 24px - Card titles, smaller sections
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontWeight: 400, // Regular weight
      fontSize: "1.25rem", // 20px - Component titles
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontWeight: 500, // Medium weight for smallest headings
      fontSize: "1rem", // 16px - Smallest heading size
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem", // 16px - Primary subtitle
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem", // 14px - Secondary subtitle
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem", // 16px - Primary body text (WCAG recommended minimum)
      lineHeight: 1.5, // WCAG recommended minimum line height
      letterSpacing: "0.00938em",
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem", // 14px - Secondary body text
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
    button: {
      fontWeight: 500, // Medium weight for buttons
      fontSize: "0.875rem", // 14px
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "none", // Accessibility: avoid all caps
    },
    caption: {
      fontWeight: 400,
      fontSize: "0.75rem", // 12px - Captions and small text
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.75rem", // 12px
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    // Enhanced Card accessibility
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          },
          "&:focus-within": {
            outline: "2px solid #6366f1",
            outlineOffset: "2px",
          },
        },
      },
    },
    // Enhanced Button accessibility
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: "44px", // WCAG AA touch target size
          "&:focus": {
            outline: "2px solid #6366f1",
            outlineOffset: "2px",
          },
        },
      },
    },
    // Enhanced Fab accessibility
    MuiFab: {
      styleOverrides: {
        root: {
          minWidth: "56px", // WCAG AA touch target size
          minHeight: "56px",
          "&:focus": {
            outline: "2px solid #ffffff",
            outlineOffset: "2px",
          },
        },
      },
    },
    // Enhanced Switch accessibility
    MuiSwitch: {
      styleOverrides: {
        root: {
          "& .MuiSwitch-switchBase": {
            "&:focus": {
              "& .MuiSwitch-thumb": {
                outline: "2px solid #6366f1",
                outlineOffset: "2px",
              },
            },
          },
        },
      },
    },
    // Enhanced Typography component with proper semantic mapping
    MuiTypography: {
      defaultProps: {
        // Ensure proper semantic heading hierarchy as per WCAG guidelines
        variantMapping: {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h2",
          subtitle2: "h3",
          body1: "p",
          body2: "p",
          caption: "span",
          overline: "span",
        },
      },
      variants: [
        // Screen reader only text utility
        {
          props: { variant: "srOnly" },
          style: {
            position: "absolute",
            left: "-10000px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            border: 0,
            padding: 0,
            margin: "-1px",
            clip: "rect(0, 0, 0, 0)",
          },
        },
        // Large display text variant for hero sections
        {
          props: { variant: "display" },
          style: {
            fontWeight: 300,
            fontSize: "4rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em",
            "@media (min-width:600px)": {
              fontSize: "5rem",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          // Ensure sufficient color contrast for all text
          "&.MuiTypography-colorTextSecondary": {
            color: "#4a5568", // Enhanced contrast ratio
          },
        },
        // Enhanced heading styles with better accessibility
        h1: {
          scrollMarginTop: "1rem", // Better anchor link experience
        },
        h2: {
          scrollMarginTop: "1rem",
        },
        h3: {
          scrollMarginTop: "1rem",
        },
        h4: {
          scrollMarginTop: "1rem",
        },
        h5: {
          scrollMarginTop: "1rem",
        },
        h6: {
          scrollMarginTop: "1rem",
        },
      },
    },
  },
});

export default theme;
