/**
 * Made by Haowen Liu in 2021
 * Resume page.
 */

import Head from "next/head";
import CustomButton from "../components/CustomButtonTemp";
import Header from "../components/Landing/Header";
import { NextPage } from "next";

const Resume: NextPage = () => {
  return (
    <>
      <Head>
        <title>Resume - Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header color="black" />
      <main className="bg-white">
        <div className="relative pt-52" style={{ left: "15%", width: "70%" }}>
          <img src="/resume_en.png" alt="Resume" />
          <div className="flex flex-row justify-around py-16">
            <CustomButton
              href="/resume_en.png"
              text="Download Resume"
              color="blue"
              secondaryColor="white"
            />
            <CustomButton
              href="/resume_cn.png"
              text="下载简历"
              color="blue"
              secondaryColor="white"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Resume;
