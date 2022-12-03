import React from "react";
import Typewriter from "typewriter-effect";

export default function IntroSectionNew() {
  return (
    <div className="flex flex-col mt-10">
      <div className="text-6xl text-white font-semibold text-center w-full font-fragile">
        Gate Keeping Protocol is your
      </div>
      <div className="text-6xl text-purple-1000 font-bold font-fragile text-center mt-5">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("POAP")
              .pauseFor(1000)
              .deleteAll()
              .typeString("NFT Sharing Service")
              .start();
          }}
        />
      </div>
    </div>
  );
}
