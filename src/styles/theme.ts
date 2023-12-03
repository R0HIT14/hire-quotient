import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    [key: string]: any;
  }
  interface TypographyVariantsOptions {
    [key: string]: any;
  }
  interface Palette {
    [key: string]: any;
  }
  interface PaletteOptions {
    [key: string]: any;
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}
let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          zIndex: "1099 ",
        },
      },
    },
  },
  palette: {
    primary: { main: "#36b1a0" },
    secondary: { main: "#36b1a0" },
    custom: {
      background: {
        blue: "#3874CB",
        grey: "#AFAFAF",
        lightGrey: "#D3D3D3",
        secondaryGrey: "#FAFAFA",
        dark: "#00240E",
        pending: "#FFEAC2",
        success: "#CCFFE1",
        error: "#FFD5CC",
        badge: "#5F38F9",
        otpField: "#F0FFF6",
        hero: "#A7D8C0",
        lightBlue: "#DCEDFE",
      },
    },
  },

  breakpoints: {
    values: {
      mobile: 0,
      tablet: 601,
      laptop: 1024,
      desktop: 1200,
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(", "),
    font: {
      montserrat: {
        fontFamily: ["Montserrat", "sans-serif"].join(", "),
      },
      openSans: {
        fontFamily: ["Open Sans", "sans-serif"].join(", "),
      },
    },
    headerOptionBtn: {
      display: "block",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "capitalize",
      whiteSpace: "nowrap",
      borderRadius: 0,
      boxSizing: "border-box",
      height: "36.5px",
    },
  },
});

theme = {
  ...theme,
  typography: {
    ...theme.typography,
  },
};

theme = responsiveFontSizes(theme);

export default theme;
