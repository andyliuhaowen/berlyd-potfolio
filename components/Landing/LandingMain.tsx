/**
 * Made by Haowen Liu in 2021
 * Component for the main landing page.
 * NO SSR: this requires window.location.hash on init.
 */

import React, { Fragment, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import PageSelector from "./PageSelector";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/dist/client/router";
import Header from "../Header";
import ScrollIndicator from "./ScrollIndicator";
import LandingContent from "./LandingContent";

const nameMap = new Map([
  ["#landing", 0],
  ["#mojo", 1],
  ["#hidden_season", 2],
  ["#chocolit", 3],
  ["#pelaton_gaming", 4],
  ["#multicolor_pen", 5],
  ["#haru", 6],
]);

const names = [
  "landing",
  "mojo",
  "hidden_season",
  "chocolit",
  "pelaton_gaming",
  "multicolor_pen",
  "haru",
];

const THRESHOLD = 30;
const NUM_PAGES = 6;

function getScrollLineHeight() {
  const el = document.createElement("div");
  el.style.fontSize = "initial";
  el.style.display = "none";
  document.body.appendChild(el);
  const fontSize = window.getComputedStyle(el).fontSize;
  document.body.removeChild(el);
  return fontSize ? window.parseInt(fontSize) : undefined;
}

export default function LandingMain() {
  const [delta, setDelta] = useState(0);
  const [lineHeight, setLineHeight] = useState<number | undefined>(undefined);

  const [section, setSection] = useState(
    nameMap.get(window.location.hash) ?? 0
  );

  const router = useRouter();

  useEffect(() => {
    router.push({ pathname: "/", hash: names[section ?? 0] });
  }, [section]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      let newDelta: number;
      switch (e.deltaMode) {
        case 0: {
          newDelta = delta + e.deltaY;
          break;
        }
        case 1: {
          if (lineHeight === undefined) {
            const height = getScrollLineHeight();
            setLineHeight(height);
            newDelta = delta + height! * e.deltaY;
          } else {
            newDelta = delta + lineHeight * e.deltaY;
          }
          break;
        }
        case 2: {
          if (e.deltaY < 0) {
            newDelta = delta - 2 * THRESHOLD;
          } else if (e.deltaY > 0) {
            newDelta = delta + 2 * THRESHOLD;
          }
          break;
        }
      }

      if (newDelta! > THRESHOLD) {
        setSection((orig) => {
          if (orig === undefined) {
            return 0;
          }
          if (orig !== NUM_PAGES) {
            return orig + 1;
          } else {
            return NUM_PAGES;
          }
        });
        newDelta = 0;
      } else if (newDelta! < -THRESHOLD) {
        setSection((orig) => {
          if (orig === undefined) {
            return 0;
          }
          if (orig !== 0) {
            return orig - 1;
          } else {
            return 0;
          }
        });
        newDelta = 0;
      }

      setDelta(newDelta!);
    },
    [delta, lineHeight]
  );

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      setSection((orig) => {
        if (orig !== NUM_PAGES) {
          if (orig === undefined) {
            return 0;
          }
          return orig + 1;
        } else {
          return NUM_PAGES;
        }
      });
    },
    onSwipedDown: () => {
      setSection((orig) => {
        if (orig === undefined) {
          return 0;
        }
        if (orig !== 0) {
          return orig - 1;
        } else {
          return 0;
        }
      });
    },
  });

  return (
    <Fragment>
      <PageSelector page={section} setSection={setSection}></PageSelector>

      <div
        className="h-screen w-screen overflow-hidden relative"
        onWheel={handleWheel}
        {...swipeHandlers}
      >
        <motion.div
          className="absolute w-full"
          initial={false}
          animate={{ top: `${-section}00vh` }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.5,
            stiffness: 100,
            velocity: 100,
          }}
        >
          <Header />
          {/* Intro page */}
          <div className="flex items-center bg-landing_pink h-screen relative">
            <div className="hidden md:inline-block md:mx-auto lg:mr-0 lg:ml-60 xl:mx-0 xl:relative xl:left-1/5">
              <div className="font-yesteryear leading-normal md:text-40 xl:text-48">
                Berly Dai
              </div>
              <div className="text-center text-4xl">
                I&apos;m a creator, designer, and a life lover.
              </div>
            </div>
            <div className="block mx-auto md:hidden">
              <div className="font-yesteryear text-9xl leading-normal">
                Berly
              </div>
              <div className="text-center text-lg">
                designer &#183; creator &#183; life lover
              </div>
            </div>
            <ScrollIndicator />
          </div>

          <LandingContent
            name="mojo"
            title="Mojo"
            tagline="Mojito"
            desc="a delightful taste from Havana"
            image="/mojo/main.png"
            titleLong={false}
          />

          <LandingContent
            name="hidden_season"
            title="Hidden Season"
            tagline="Makeup Set"
            desc="a memorable gift from The Palace Museum"
            image="/hidden_season/main.png"
            titleLong={true}
          />

          <LandingContent
            name="chocolit"
            title="Chocolit"
            tagline="Toy &amp; Treat"
            desc="a playful and tasty kit for adult"
            image="/chocolit/main.png"
            titleLong={true}
          />

          <LandingContent
            name="pelaton_gaming"
            title="Pelaton Gaming"
            tagline="VR Headset"
            desc="a gaming platform aimed at blending gaming with physical activity"
            image="/pelaton_gaming/main.png"
            titleLong={true}
          />

          <LandingContent
            name="multicolor_pen"
            title="Multicolor Pen"
            tagline="Adaptive Pen"
            desc="a tool to help artists with cerebral palsy to draw independently"
            image="/multicolor_pen/main.jpg"
            titleLong={true}
          />

          <LandingContent
            name="haru"
            title="Haru"
            tagline="Speaker"
            desc="a seasonal limited high-end speaker for Francfranc"
            image="/haru/main.png"
            titleLong={false}
          />
        </motion.div>
      </div>
    </Fragment>
  );
}
