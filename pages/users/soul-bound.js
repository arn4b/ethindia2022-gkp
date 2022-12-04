import React, { useEffect, useState } from "react";
import ItemTile from "../../components/Common/ItemTile";
import Navbar from "../../components/Common/Navbar";
import store from "../../redux/store";
import userSbLength from "../../middlewares/userSbLength";
import userSbDrops from "../../middlewares/userSbDrops";
import idToSoulBound from "../../middlewares/idToSoulBound";

const UserSoulBound = () => {
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [isLoading, setIsLoading] = useState(true);
  let userAddress = store.getState().walletAddress;
  console.log(userAddress);
  let contractsArray = [];

  useEffect(() => {
    const fetchSmartContracts = async () => {
      // if (isLoading) {
      let length = await userSbLength(userAddress);
      console.log("Length: ", length);

      for (const i of [...Array(length).keys()]) {
        console.log("I: ", i);
        // let globalId = await userSbDrops(userAddress, i);
        // console.log("GlobalId: ", globalId);
        // let contract = await idToSoulBound(globalId);
        // contractsArray.push(contract);
        // console.log("Contracts : ", contract);
      }
      setIsLoading(false);
      // }
    };
    // try {
    fetchSmartContracts().catch(console.error);
    // } catch (err) {
    //   console.log(err);
    // }

    return () => {
      console.log("This will be logged on unmount");
    };
  }, []);
  if (isLoading) return <div>Loading</div>;
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

export default UserSoulBound;
