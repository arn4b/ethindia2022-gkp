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
    <div className="flex justify-center items-center mt-20" style={{"height":"calc(100vh - 300px)"}}>
        <Link
        href="/users"
        className="w-1/2 px-20 flex flex-col justify-center items-center bg-purple-1000 py-40 rounded-2xl mx-5 cursor-pointer hover:scale-105 hover:bg-purple-1000 transition ease-in-out h-full"
        >
        <div className="text-6xl text-white">
            <BiUser className=" mb-4" />
        </div>
        <div className="text-4xl text-white font-fragile font-bold">I am a User</div>
        </Link>

        <Link
        href="/org"
        className="w-1/2 px-20 flex flex-col justify-center items-center bg-purple-1000 py-40 rounded-2xl mx-5 cursor-pointer hover:scale-105 hover:bg-purple-1000 transition ease-in-out h-full"
        >
        <div className="text-6xl text-white">
            <HiOutlineBuildingLibrary className=" mb-4" />
        </div>
        <div className="text-4xl font-fragile font-bold text-white">We are an Organisation</div>
        </Link>
    </div>
    </div>
);
}
