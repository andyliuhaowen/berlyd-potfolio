/**
 * Made by Haowen Liu in 2021
 * Base page layout, page transition setup.
 */

import "../styles/globals.css";
import { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout type="crossfade">
      <Component {...pageProps} />
    </AnimateSharedLayout>
  );
}

export default MyApp;
