import React from "react";
import Navbar from "../../components/Common/Navbar";
import { useRouter } from "next/router";

export default function IntroSection() {
  const router = useRouter();
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center"  style={{"height":"calc(100vh - 256px)"}}>
        <div className="text-6xl font-bold font-fragile py-8">Gatekeeping all your Events</div>
        <div className="columns-3 w-full m-4">
          <div
            className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out font-fragile text-4xl"
            onClick={() => {
              router.push("/soul-bound");
            }}

          >
            Soul Bound
          </div>
          <div
            className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out font-fragile text-4xl"
            onClick={() => {
              router.push("/direct-two-contract");
            }}

          >
            Direct to Contract
          </div>
          <div
            className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out font-fragile text-4xl"
            onClick={() => {
              router.push("/sublet-nfts");
            }}

          >
            Subletting NFTs
          </div>
        </div>
      </div>
    </div>
  );
}
