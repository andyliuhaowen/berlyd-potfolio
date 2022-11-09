/**
 * Made by Haowen Liu in 2021
 * Project page: Multicolor Pen.
 */

import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import FullScreenImage from "../components/Designs/FullScreenImage";
import LogoHeader from "../components/Designs/LogoHeader";
import { Height, Width } from "../utils/global_types";
import { NextPage } from "next";

const MulticolorPen: NextPage = () => {
  return (
    <>
      <Head>
        <title>Multicolor Pen - Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <LogoHeader name="multicolor_pen"></LogoHeader>
        <AnimatePresence>
          <FullScreenImage
            image="/multicolor_pen/main_full"
            alt="Multicolor Pen photo"
            width={Width.Full}
            height={Height.Free}
            imageHeight={2098}
            imageWidth={2560}
            layoutId="multicolor_pen-image"
          ></FullScreenImage>
        </AnimatePresence>
      </main>
    </>
  );
};

export default MulticolorPen;
