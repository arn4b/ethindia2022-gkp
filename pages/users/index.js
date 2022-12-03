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

      <div className="grid grid-cols-2 grid-rows-2 gap-y-8 mt-20 text-white">
        <Link
          href="/users/soul-bound"
          className="mx-20 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl">Soul Bound Tokens (SBT)</div>
        </Link>
        <Link
          href="/users/whitelisted"
          className="mx-20 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl">Whitelist Contracts (WC)</div>
        </Link>
        <Link
          href="/users/renting"
          className="mx-20 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl">Rental Contract</div>
        </Link>
        <Link
          href="/marketplace"
          className="mx-20 px-10 flex flex-col justify-center items-center bg-purple-1000 py-20 rounded-2xl cursor-pointer h-full"
        >
          <div className="text-6xl">
            <BiUser className=" mb-4" />
          </div>
          <div className="text-4xl">Market Place</div>
        </Link>
      </div>
    </div>
  );
}
