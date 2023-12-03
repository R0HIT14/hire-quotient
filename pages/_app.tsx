import Footer from "@/src/common/Footer";
import Header from "@/src/common/Header";
import { menuOption } from "@/src/constant";
import theme from "@/src/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header defaultMenu={menuOption.defaultMenu} />
      {<Component {...pageProps} />}
    </ThemeProvider>
  );
}
