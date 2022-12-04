import React from "react";
import Navbar from "../../components/Common/Navbar";
import { useRouter } from "next/router";
import { BiUser } from "react-icons/bi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Link from "next/link";

export default function IntroSection() {
  const router = useRouter();
  return (
    <div className="bg-black">
      <Navbar />

      <div className="grid grid-cols-2 grid-rows-2 gap-y-8 m-20 text-white" style={{"height":"calc(100vh - 300px)"}}>
        <Link
          href="/users/soul-bound"
          className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl font-fragile">Soul Bound Tokens</div>
        </Link>
        <Link
          href="/users/whitelisted"
          className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl font-fragile">Whitelist Contracts</div>
        </Link>
        <Link
          href="/users/renting"
          className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl font-fragile">Rental Contract</div>
        </Link>
        <Link
          href="/marketplace"
          className="mx-4 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full hover:scale-105 hover:bg-purple-1000 transition ease-in-out"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl font-fragile">Market Place</div>
        </Link>
      </div>
    </div>
  );
}
