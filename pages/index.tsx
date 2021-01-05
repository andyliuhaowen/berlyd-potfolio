import Head from 'next/head'
import Image from 'next/image'
import React, { Fragment } from 'react'
import Header from '../components/Header'
import PageSelector from '../components/PageSelector'
import ScrollIndicator from '../components/ScrollIndicator'
import CustomButton from '../components/CustomButton'

import styles from '../styles/Home.module.css'

// const isMobile = useMediaQuery({ query: 'only screen and (min-width : 480px)' })
// const isDesktop = useMediaQuery({ query: 'only screen and (min-width : 992px)' })
// const isExtraWide = useMediaQuery({ query: 'only screen and (min-width : 1200px)' })

export default function Home () {
  return (
    <Fragment>
      <Head>
        <title>Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main>
        {/* Intro page */}
        <div className="flex items-center bg-landing_pink h-screen relative">
          <div className={styles.big_positioning_title}>
            <div className={styles.title}>Berly Dai</div>
            <div className={styles.landing_text}>I&apos;m a creator, designer, and a life lover.</div>
          </div>
          <div className={styles.small_landing}>
            <div className={styles.title}>Berly</div>
            <div className={styles.landing_text}>designer &#183; creator &#183; life lover</div>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8" style={{ bottom: '8%' }}>
            <ScrollIndicator />
          </div>
        </div>

        <div className="fixed z-50 left-0 top-1/2 transform -translate-y-1/2">
          <PageSelector color="mojo_text" page={1}></PageSelector>
        </div>

        {/* Mojo */}
        <div className="bg-mojo_bg h-screen relative">
          {/* <div className={[styles.big_positioning_title, 'pt-16'].join(' ')}>
            <div className={styles.mojo_title}>Mojo</div>
            <div className="text-mojo_text text-4xl my-2">Mojito</div>
            <div className="text-mojo_text text-lg my-2">a delightful taste from Havana</div>
            <CustomButton href="mojo" text="View Project" color="mojo_text" />
          </div> */}
          <div className="flex items-center h-full w-full left-0 top-0 absolute">
            <div style={{ width: '35%' }} className="h-full flex flex-col items-center pl-28">
              <div style={{ top: '10%' }} className="relative">
                <div className={[styles.mojo_title, 'w-0'].join(' ')}>Mojo</div>
                <div className="text-mojo_text text-5xl mb-2" style={{ marginTop: '10vh' }}>Mojito</div>
                <div className="text-mojo_text text-lg my-2">a delightful taste from Havana</div>
                <CustomButton href="mojo" text="View Project" color="mojo_text" />
              </div>
              {/* <div className="text-mojo_text text-5xl my-2">Mojito</div>
              <div className="text-mojo_text text-lg my-2">a delightful taste from Havana</div>
              <CustomButton href="mojo" text="View Project" color="mojo_text" /> */}
            </div>
            <div className="flex flex-row mr-16 relative flex-grow mt-20" style={{ height: '65%' }} >
              <Image src="/mojo.png" alt="Mojo photo" layout="fill" objectFit="cover" objectPosition="center"></Image>
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </Fragment>
  )
}
