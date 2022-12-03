import React from "react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";

const ItemTile = () => {
	return (
		<div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mt-10">
			<img
				className="rounded-t-lg"
				src="/images/eth.jpeg"
				alt="product image"
			/>
			<div className="px-5 pb-5 pt-5">
				<h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
					Bored Ape
				</h5>
				<h6 className="tracking-tight text-gray-900 dark:text-white font-light ">
					BAP
				</h6>
				<div className="flex">
					<p className="font-semibold">Expires on :&nbsp;</p>
					<p> 23/11/2022</p>
				</div>
				<div className="flex items-center justify-between mt-2">
					<img src="images/polygon-matic-icon.svg" className="w-8" />
					<span
						className="text-3xl font-bold text-gray-900 dark:text-white"
						style={{ marginLeft: -160 }}
					>
						599
					</span>
					<a
						href="#"
						className="text-white bg-purple-1000 font-medium rounded-lg text-md px-5 py-2.5 text-center"
					>
						Rent
					</a>
				</div>
			</div>
		</div>
	);
};

export default ItemTile;
