import Head from "next/head";
import HTMLFlipBook from "react-pageflip";

import Header from "../components/Landing/Header";

const Book: React.FC = () => {
  return (
    <>
      <Head>
        <title>Book - Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header color="black" />

      <main className="pt-48 flex flex-col items-center bg-pink min-h-screen">
        <div className="max-w-3xl px-8 w-full">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <HTMLFlipBook
            width={500}
            height={657.421875}
            size="stretch"
            className="relative"
          >
            <img
              src="/books/1/transparent_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/cover_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/1_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/2_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/3_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/4_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/5_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/6_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/7_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/8_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/9_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/10_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/back cover_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
            <img
              src="/books/1/transparent_full_2k.png"
              alt="Book 1 page 1"
              data-density="hard"
            ></img>
          </HTMLFlipBook>
        </div>
      </main>
    </>
  );
};

export default Book;
