import React from "react";
import ItemTile from "../../components/Common/ItemTile";
import Navbar from "../../components/Common/Navbar";

const UserSoulBound = () => {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div className="bg-black">
      <Navbar />
      <div className="m-5 mx-10 text-white text-4xl font-semibold font-fragile">My SoulBound Tokens</div>
      <div className="grid grid-cols-4 grid-rows-1 justify-items-center items-center gap-16">
        {l.map((key, idx) => {
          return <ItemTile />;
        })}
      </div>
    </div>
  );
};

export default UserSoulBound;
