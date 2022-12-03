import React from "react";
import Navbar from "../../components/Common/Navbar";
import PrimaryButton from "../../components/Common/PrimaryButton";

function qr(props) {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="mt-20 bg-black text-center">
        <div className="h-70 flex justify-center items-center">
          <img src="/images/mystery.jpg"></img>
        </div>
        <PrimaryButton name="Mint Now" onClick={() => {}} />
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const paramToken = ctx.query.contractAddress?.toString() || "";

  return {
    props: {
      paramToken: paramToken,
    },
  };
}

export default qr;
