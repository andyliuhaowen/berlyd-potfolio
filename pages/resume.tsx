/**
 * Made by Haowen Liu in 2021
 * Resume page.
 */

import CustomButton from "../components/CustomButtonTemp";
import Header from "../components/Landing/Header";

export default function Resume() {
  return (
    <>
      <Header color="black" />
      <main className="bg-white">
        <div className="relative pt-52" style={{ left: "15%", width: "70%" }}>
          <img src="/resume_en.png" alt="Resume" />
          <div className="flex flex-row py-16 justify-around">
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
}
