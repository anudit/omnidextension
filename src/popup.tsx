import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Popup/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      {children}
    </>
  );
};

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        background: props.colorMode === "dark" ? "#100f13" : "white"
      }
    })
  },
  fonts: {
    heading: "Segoe UI",
    body: "Segoe UI"
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 900
  },
  config: {
    cssVarPrefix: "c",
    initialColorMode: "dark"
  }
});
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <GlobalStyle />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
