import React from "react";
import Navbar from "../../components/Common/Navbar";
import ItemTile from "../../components/Common/ItemTile";

const MarketPlace = () => {
	const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
	return (
		<div>
			<Navbar />
			<div className="grid grid-cols-3 grid-rows-1">
				{l.map((key, idx) => {
					return <ItemTile />;
				})}
			</div>
		</div>
	);
};

export default MarketPlace;
