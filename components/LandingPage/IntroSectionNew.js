import React from "react";
import Typewriter from "typewriter-effect";
import PrimaryButton from "../Common/PrimaryButton";
import { useRouter } from "next/router";

export default function IntroSectionNew() {
  const router = useRouter();
  return (
    <div className="flex flex-col mt-14">
      <div className="text-6xl text-white font-semibold text-center w-full font-fragile">
        Gate Keeping Protocol is your
      </div>
      <div className="text-6xl text-purple-1000 font-bold font-fragile text-center mt-5">
        <Typewriter
          options={{
            strings: [
              "Entry Management",
              "Subscription System",
              "Token Gating Protocol",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>

      <div className="text-center text-slate-300 font-semibold text-xl mx-10 mt-5">
        One-stop decentralised gating solution for all your Event Entry
        Management needs and Readily Adaptable Subscription Systems
      </div>

      <div className="flex justify-center mt-14">
        <PrimaryButton onClick={() => {router.push("/get-started");}} name="Get Started"></PrimaryButton>
      </div>
    </div>
  );
}
