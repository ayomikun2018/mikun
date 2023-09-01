import React from "react";
import Navbar from "./feature/Navbar";
import picture from "./images/IMG_5960_2-removebg-preview.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import book from "./images/book.png";
import brain from "./images/brain (1).png";
import light from "./images/light.png";

import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div>
        <section className="">
          <div
            className="flex flex-row font-calistoga pt-20 pl-6  md:pt-52 md:px-28  text-[#24315E] relative overflow-hidden"
            id="home"
            style={{
              backgroundImage:
                "url(http://shtheme.com/demosd/trito/wp-content/uploads/2023/07/1.jpg)",
              height: "90vh",
              width: "",
            }}
          >
            <div className=" flex flex-col   ">
              <div className="flex flex-col ">
                <p className=" text-[35px] font-space ">Hi I'm</p>
                <h2 className=" text-[60px] py-1">Ayomikun Agbeja</h2>
                <p className="text-[21px]">A Web Developer based in Nigeria</p>
              </div>

              <div className="flex flex-row gap-5 py-10 items-center">
                <Link to="#contact">
                  <button className="block text-[#24315E]  py-2 px-8  bg-white  border border-[#24315E] hover:bg-[#24315E] hover:text-white">
                    Say Hello
                  </button>
                </Link>

                <Link
                  to="#portfolio"
                  className="block   text-[#24315E]  py-1 px-6 underline hover:no-underline "
                >
                  My Work
                </Link>
              </div>
              <div>
                <img src=""></img>
                <p className="italic font-inter font-extrabold pt-28  w-40 md:w-[80%]">
                  "I listen to your needs & thoughtfully interpret your
                  requirements."
                </p>
              </div>
            </div>

            <div className="flex flex-row">
              <div className=" flex items-center justify-center overflow-hidden">
                <img
                  src={picture}
                  className="mt-16 absolute   right-[-5rem]  md:right-[10rem] bottom-0 w-80 md:w-[40%] "
                ></img>{" "}
              </div>
              <div className=" flex-col gap-6 mt-auto pb-4 md:flex-row md:flex hidden absolute bottom-[3rem] right-[5rem]">
                <div className="bg-white rounded-full h-10 w-10 ">
                  {" "}
                  <LinkedInIcon className="w-10 mt-2 ml-2" />
                </div>
                <div className="bg-white rounded-full h-10 w-10 ">
                  {" "}
                  <GitHubIcon className="w-10 mt-2 ml-2" />
                </div>
                <div className="bg-white rounded-full h-10 w-10 ">
                  {" "}
                  <TwitterIcon className="w-10 mt-2 ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#3D4970] flex items-center justify-center min-h-[15rem]  ">
            <div className="my-[4rem]">
              <div className=" grid grid-cols-1 md:grid-cols-3 px-10  md:gap-4  gap-8">
                {[
                  {
                    image: light,
                    title: "Dedication",
                    text: " I'm dedicated to bringing to life high end designs and products.",
                    className: "md:border-r-2"
                  },
                  {
                    image:book,
                    title: "Smart Work",
                    text: " I'm dedicated to bringing to life high end designs and products.",
                    className: "md:border-r-2"

                  },
                  {
                    image: brain,
                    title: "Intelligence",
                    text: " I'm dedicated to bringing to life high end designs and products.",
                  },
                ].map(({ image, title, text,className }, index) => (
                  <div className={`${className} col-span-1 self-start border-slate-300 hover:border-slate-500 transition duration-300 ease-in-out px-10`}   key={index}>
                    <div className="flex  items-center font-calistoga text-[#ffff] text-[27px] gap-3 pb-4">
                      <img src={image} className=" h-10 w-10"/>
                      {title}
                    </div>
                    <p className=" font-inter text-[#abb8c3]">{text}</p>
                  </div>
                ))}
                <p className=" font-inter text-[#abb8c3]"></p>
              </div>
             
            </div>
          </div>
        </section>
        <section className="" id="about"></section>
        <section className="" id="portfolio"></section>
        <section className="" id="services"></section>
        <section className="" id="contact"></section>
      </div>

      <div></div>
    </>
  );
}

export default App;
