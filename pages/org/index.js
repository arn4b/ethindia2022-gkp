import React from "react";
import Navbar from "../../components/Common/Navbar";
import { useRouter } from "next/router";

export default function IntroSection() {
	const router = useRouter();
	return (
		<div>
			<Navbar />
			<div className="flex justify-center items-center">
				<div className="columns-3 w-full m-4">
					<div
						className="bg-purple-1000 rounded-md p-4 cursor-pointer"
						onClick={() => {
							router.push("/soul-bound");
						}}
					>
						Soul Bound
					</div>
					<div
						className="bg-purple-1000 rounded-md p-4 cursor-pointer"
						onClick={() => {
							router.push("/direct-two-contract");
						}}
					>
						Direct 2 Contract
					</div>
					<div
						className="bg-purple-1000 rounded-md p-4 cursor-pointer"
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