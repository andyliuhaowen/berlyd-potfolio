/**
 * Made by Haowen Liu in 2021
 * Base page layout, page transition setup.
 */

import "../styles/globals.css";
import { AppProps } from "next/app";
import { useEffect } from "react";
import checkCSS from "checkcss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    checkCSS();
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
