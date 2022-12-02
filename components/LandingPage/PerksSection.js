import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";

export default function PerksSection() {
  return (
    <div className="flex justify-evenly items-center px-10 font-semibold mt-20">
      <div className="border-white px-5 py-5 rounded-xl flex flex-col items-center justify-center border">
        <div className="pb-2 text-2xl">
          <VscWorkspaceTrusted />
        </div>
        <div className="text-xl">Building Trust</div>
      </div>

      <div className="border-white px-5 py-5 rounded-xl flex flex-col items-center justify-center border">
        <div className="pb-2 text-2xl">
          <VscWorkspaceTrusted />
        </div>
        <div className="text-xl">Building Trust</div>
      </div>

      <div className="border-white px-5 py-5 rounded-xl flex flex-col items-center justify-center border">
        <div className="pb-2 text-2xl">
          <VscWorkspaceTrusted />
        </div>
        <div className="text-xl">Building Trust</div>
      </div>
    </div>
  );
}
