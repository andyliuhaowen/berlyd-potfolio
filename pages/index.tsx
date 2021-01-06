import Head from 'next/head'
import React, { Fragment } from 'react'
import Header from '../components/Header'
import PageSelector from '../components/PageSelector'
import ScrollIndicator from '../components/ScrollIndicator'
import LandingContent from '../components/LandingContent'

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
        <PageSelector></PageSelector>

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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-8 w-8 bottom-8p">
            <ScrollIndicator />
          </div>
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
          name="mojo"
          title="Hidden Season"
          tagline="Makeup Set"
          desc=""
          image="/hidden_season.png"
          titleLong={true}
        />

        <LandingContent
          name="mojo"
          title="Chocolit"
          tagline="Toy &amp; Treat"
          desc=""
          image="/chocolit.png"
          titleLong={true}
        />

        <LandingContent
          name="mojo"
          title="Pelaton Gaming"
          tagline="VR Headset"
          desc=""
          image="/pelaton_gaming.png"
          titleLong={true}
        />

        <LandingContent
          name="mojo"
          title="Multicolor Pen"
          tagline="Adaptive Pen"
          desc=""
          image="/multipen.jpg"
          titleLong={true}
        />

        <LandingContent
          name="mojo"
          title="Haru"
          tagline="Speaker"
          desc=""
          image="/haru.png"
          titleLong={false}
        />
      </main>
      <footer></footer>
    </Fragment>
  )
}
