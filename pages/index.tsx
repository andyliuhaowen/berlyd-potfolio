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
          <div className={styles.big_positioning_landing}>
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

        {/* Mojo */}
        <div className="flex items-center bg-mojo_bg h-screen">
          <div className="mr-4">
            <PageSelector color="mojo_text" page={1}></PageSelector>
          </div>
          <div className="flex flex-row flex-grow mr-8" style={{ height: '90%' }}>
            <div className="w-64">
              <div className={styles.big_positioning_landing}>
                <div className={[styles.mojo_title, styles.title].join(' ')}>Mojo</div>
              </div>
              <div className="text-mojo_text text-3xl my-2">Mojito</div>
              <div className="text-mojo_text my-2">a delightful taste from Havana</div>
              <CustomButton href="mojo" text="View Project" color="mojo_text" />
            </div>
            <div className="flex-grow h-full relative">
              <div className="m-8 absolute top-8 left-8 bottom-8 right-8">
                <Image src="/mojo.png" alt="Mojo photo" layout="fill" objectFit="cover" objectPosition="center"></Image>
              </div>
              {/* <div className="object-cover object-left"></div> */}
            </div>
          </div>
        </div>
      </main>

      <footer>
      </footer>
    </Fragment>
  )
}
