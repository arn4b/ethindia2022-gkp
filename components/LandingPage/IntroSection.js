import React from "react";
import PrimaryButton from "../Common/PrimaryButton";
import { useRouter } from "next/router";

export default function IntroSection() {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 text-center text-6xl font-fragile pl-7">
          Securing all the DAO Protocols with Permissioned Protocols
        </div>
        <div className="w-1/2">
          <img src="images/gkp-intro.png" className="h-200"></img>
        </div>
      </div>
      <div className="flex justify-center">
        <PrimaryButton
          onClick={() => {
            router.push("/get-started");
          }}
          name="Try Now"
        ></PrimaryButton>
      </div>
    </div>
  );
}
