import Head from 'next/head'
import Image from 'next/image'
import React, { Fragment, RefObject, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Header from '../components/Header'
import PageSelector from '../components/PageSelector'
import ScrollIndicator from '../components/ScrollIndicator'
import CustomButton from '../components/CustomButton'

// const isMobile = useMediaQuery({ query: 'only screen and (min-width : 480px)' })
// const isDesktop = useMediaQuery({ query: 'only screen and (min-width : 992px)' })
// const isExtraWide = useMediaQuery({ query: 'only screen and (min-width : 1200px)' })

function useCenter (scrollWidth: number | undefined) {
  const [center, setCenter] = useState(false)

  useEffect(function () {
    function handleResize () {
      if (scrollWidth !== undefined) {
        if (scrollWidth > window.innerWidth / 2) {
          if (!center) {
            setCenter(true)
          }
        } else {
          if (center) {
            setCenter(false)
          }
        }
      } else {
        if (!center) {
          setCenter(true)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  })
  return center
}

export default function Home () {
  const textElement: RefObject<HTMLDivElement> = useRef(null)

  const isTablet = useMediaQuery({ query: 'only screen and (min-width : 768px)' })

  const center = useCenter(textElement.current?.scrollWidth)

  useEffect(function () {
    console.log(textElement.current?.scrollWidth)
    console.log(center)
  }, [center])

  return (
    <Fragment>
      <Head>
        <title>Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main>
        {/* Intro page */}
        <div className={'flex items-center bg-landing_pink h-screen' + (center ? ' justify-center' : '')}>
          <div className={!center ? 'relative left-1/4' : ''} ref={textElement}>
            <div className="" style={{ fontSize: '10rem', fontFamily: 'Yesteryear, sans-serif' }}>Berly {isTablet ? ' Dai' : ''}</div>
            {isTablet &&
              <div className="text-4xl">I&apos;m a creater, designer, and a life lover.</div>
            }
            {!isTablet &&
              <div className="text-3xl">creater &#183; designer &#183; life lover</div>
            }
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8" style={{ bottom: '8%' }}>
            <ScrollIndicator />
          </div>
        </div>

        {/* Mojo */}
        <div className="flex items-center bg-mojo_bg h-screen">
          <PageSelector color="mojo_text" page={1}></PageSelector>
          <div style={{ width: '20vw' }}>
            <div className="text-mojo_text" style={{ fontSize: '10rem', fontFamily: 'Yesteryear, sans-serif' }}>Mojo</div>
            <div className="text-mojo_text">Mojito</div>
            <div className="text-mojo_text">a delightful taste from Havana</div>
            <CustomButton href="mojo" text="View Project" color="mojo_text" />
          </div>
          <div style={{ width: '65vw' }}>
            <Image src="/mojo.png" alt="Mojo photo" width="8001" height="4501" layout="responsive"></Image>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </Fragment>
  )
}
