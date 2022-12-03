import React from "react";

export default function PoweredBy() {
  return (
    <div className="mt-20 border border-white mx-10 px-5 py-5 my-10 rounded-3xl">
      <div className="w-full text-center text-2xl font-semibold mb-5">
        Powered By
      </div>
      <div className="flex justify-evenly">
        <img src="images/eth.jpeg" className="h-28 rounded-full"></img>
        <img src="images/polygon.png" className="h-28 rounded-full"></img>
        <img src="images/push.jpeg" className="h-28 rounded-full"></img>
        <img src="images/ipfs.png" className="h-28 rounded-full"></img>
      </div>
    </div>
  );
}
