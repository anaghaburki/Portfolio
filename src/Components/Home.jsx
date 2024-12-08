import React from "react";
import profile from "../assets/profile.jpg";
import Typewriter from "typewriter-effect";
import resume from "../assets/resume.pdf";
import resize from "../assets/resize.png";
import contact from "../assets/contact.png";
import { description, greetings, pronoun, location } from "../data/title";
import { headline, name } from "../data/about";

function Home() {
  return (
    <div className="text-white h-screen flex flex-col w-full" id="home">
      <div className="h-screen flex items-center md:w-10/12 w-11/12 mx-auto">
        <div className="flex justify-between items-center m-auto">
          <div className="sm:w-7/12 w-10/12 max-[495px]:w-11/12 sm:mx-0 mx-auto">
            <div className="pb-4 text-3xl font-semibold">{greetings}</div>
            <div className="flex items-center gap-3 pb-4">
              <div className="text-xl">{pronoun}</div>
              <div className="font-semibold text-xl text-[#005e23]">{name}</div>
            </div>
            <div className="pb-4 text-xl flex gap-2">
              <span className="text-lg">A</span>
              <span className="text-white font-bold">
                <Typewriter
                  options={{
                    strings: description,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
            <div className="leading-loose">{headline}</div>
            <div className="w-fit pt-3 flex items-center gap-2">
              <div className="text-sm">{location}</div>
            </div>
            <div className="flex items-center xl:w-1/2 lg:w-4/6 sm:w-11/12 w-3/4 max-[555px]:w-10/12 max-[495px]:w-11/12 max-[445px]:w-full justify-between pt-6">
              <a href={resume} target="_blank" rel="noreferrer">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-[#005e23] text-white">
                  <img src={resize} alt="Resume" className="h-6 object-contain" />
                  <span className="font-semibold">Resume</span>
                </div>
              </a>
              
            </div>
          </div>
          <div className="sm:w-1/3 sm:block hidden">
            <img className="object-contain" src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
