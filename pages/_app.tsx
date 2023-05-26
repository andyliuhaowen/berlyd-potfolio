/**
 * Made by Haowen Liu in 2021
 * Base page layout, page transition setup.
 */

import "../styles/globals.css";
import { AppProps } from "next/app";
import React from "react";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
