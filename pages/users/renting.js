import React from "react";
import ItemTile from "../../components/Common/ItemTile";
import Navbar from "../../components/Common/Navbar";

const UserWhitelistedContracts = () => {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <div>
      <Navbar />
      <div className="mx-5 text-white text-2xl font-semibold">My SBTs</div>
      <div className="grid grid-cols-3 grid-rows-1">
        {l.map((key, idx) => {
          return <ItemTile />;
        })}
      </div>
    </div>
  );
};

export default UserWhitelistedContracts;
