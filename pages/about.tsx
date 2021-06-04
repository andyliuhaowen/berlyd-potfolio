/**
 * Made by Haowen Liu in 2021
 * About page.
 */

import Head from "next/head";
import ImageAndText from "../components/Designs/ImageAndText";
import Header from "../components/Landing/Header";
import { Height } from "../utils/global_types";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Berly Dai</title>
      </Head>
      <div>
        <main className="bg-white overflow-auto min-h-screen">
          <Header></Header>
          <div className="h-24"></div>
          <ImageAndText
            title="About Me"
            color="green"
            image="/about/about_full"
            alt="Berly Dai"
            height={Height.Free}
            imageHeight={2700}
            imageWidth={4800}
            imageOnLeft={false}
            text={[
              "I was born in a beautiful city, Hangzhou, usually considered “heaven” in China. I was always exploring the city of nature with my parents when I was young. I was grown surrounded by nature. It made me appreciate the goodness of life and feel the love from mother earth.",
              "I’m also a curious person and love to do hands-on works. I fell in love with baking and hand-crafting, which lead me to design later on. I enjoyed both the scientific and esthetic aspects of baking and crafting. Love to see how a precise and logical process could lead to beautiful and enjoyable work. I’m always looking for the balance between logic and emotion and incorporating them into my life and work.",
            ]}
          ></ImageAndText>
          <div className="h-24"></div>
        </main>
      </div>
    </>
  );
}
