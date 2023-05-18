import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProject } from "../core/Styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ThemeProject}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
