import Head from 'next/head'
import React, { Fragment, useCallback, useEffect, useState } from 'react'
import Header from '../components/Header'
import PageSelector from '../components/PageSelector'
import ScrollIndicator from '../components/ScrollIndicator'
import LandingContent from '../components/LandingContent'
import { motion } from 'framer-motion'

const THRESHOLD = 30
const NUM_PAGES = 6

function getScrollLineHeight () {
  const el = document.createElement('div')
  el.style.fontSize = 'initial'
  el.style.display = 'none'
  document.body.appendChild(el)
  const fontSize = window.getComputedStyle(el).fontSize
  document.body.removeChild(el)
  return fontSize ? window.parseInt(fontSize) : undefined
}

export default function Home () {
  const [section, setSection] = useState(0)
  const [delta, setDelta] = useState(0)
  const [lineHeight, setLineheight] = useState<number | undefined>(undefined)

  const handleWheel = useCallback((e: React.WheelEvent) => {
    let newDelta: number
    switch (e.deltaMode) {
      case 0: {
        newDelta = delta + e.deltaY
        break
      }
      case 1: {
        if (lineHeight === undefined) {
          const height = getScrollLineHeight()
          setLineheight(height)
          newDelta = delta + height! * e.deltaY
        } else {
          newDelta = delta + lineHeight * e.deltaY
        }
        break
      }
      case 2: {
        if (e.deltaY < 0) {
          newDelta = delta - 2 * THRESHOLD
        } else if (e.deltaY > 0) {
          newDelta = delta + 2 * THRESHOLD
        }
        break
      }
    }

    if (newDelta! > THRESHOLD) {
      setSection((orig) => {
        if (orig !== NUM_PAGES) {
          return orig + 1
        } else {
          return NUM_PAGES
        }
      })
      newDelta = 0
    } else if (newDelta! < -THRESHOLD) {
      setSection((orig) => {
        if (orig !== 0) {
          return orig - 1
        } else {
          return 0
        }
      })
      newDelta = 0
    }

    setDelta(newDelta!)
  }, [delta, lineHeight])

  useEffect(() => {
    console.log(delta)
    console.log(section)
  }, [delta, section])

  return (
    <Fragment>
      <Head>
        <title>Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <PageSelector page={section}></PageSelector>

        <div className="h-screen w-screen overflow-hidden relative" onWheel={handleWheel}>
          <motion.div className="absolute w-full" animate={{ top: `${-section}00vh` }}>
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
                <div className="font-yesteryear text-9xl leading-normal">Berly</div>
                <div className="text-center text-lg">
              designer &#183; creator &#183; life lover
                </div>
              </div>
              <ScrollIndicator />
            </div>

            {/* Mojo */}
            <LandingContent
              name="mojo"
              title="Mojo"
              tagline="Mojito"
              desc="a delightful taste from Havana"
              image="/mojo_2.png"
              titleLong={false}
            />

            <LandingContent
              name="hs"
              title="Hidden Season"
              tagline="Makeup Set"
              desc=""
              image="/hidden_season.png"
              titleLong={true}
            />

            <LandingContent
              name="choco"
              title="Chocolit"
              tagline="Toy &amp; Treat"
              desc=""
              image="/chocolit.png"
              titleLong={true}
            />

            <LandingContent
              name="pelaton"
              title="Pelaton Gaming"
              tagline="VR Headset"
              desc=""
              image="/pelaton_gaming.png"
              titleLong={true}
            />

            <LandingContent
              name="multi"
              title="Multicolor Pen"
              tagline="Adaptive Pen"
              desc=""
              image="/multipen.jpg"
              titleLong={true}
            />

            <LandingContent
              name="haru"
              title="Haru"
              tagline="Speaker"
              desc=""
              image="/haru.png"
              titleLong={false}
            />
          </motion.div>
        </div>
      </main>
      <footer></footer>
    </Fragment>
  )
}
