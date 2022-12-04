import React, { useEffect, useState } from "react";
import ItemTile from "../../components/Common/ItemTile";
import Navbar from "../../components/Common/Navbar";
import store from "../../redux/store";
import userSbLength from "../../middlewares/userSbLength";
import userSbDrops from "../../middlewares/userSbDrops";
import idToSoulBound from "../../middlewares/idToSoulBound";

const UserSoulBound = () => {

  const l = [
    {
      name: 'BAYC Cool Ape',
      symbol: 'BAYCC',
      date: '23/12/22',
      price: '33',
      img: 'https://www.pinkvilla.com/imageresize/decoding_nfts_what_are_nfts_and_how_do_they_work_all_you_need_to_know.jpg?width=752&t=pvorg'
    },
    {
      name: 'BAYC Dark Ape',
      symbol: 'BAYCD',
      date: '23/12/22',
      price: '4566',
      img: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg'
    },
    {
      name: 'BAYC HipHop Ape',
      symbol: 'BAYCH',
      date: '23/12/22',
      price: '9000',
      img: 'https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png',
    },
    {
      name: 'BAYC Fresh Ape',
      symbol: 'BAYCF',
      date: '23/12/22',
      price: '1222',
      img: 'https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png'
    },
    {
      name: 'BAYC Cool Ape',
      symbol: 'BAYCC',
      date: '23/12/22',
      price: '33',
      img: 'https://airnfts.s3.amazonaws.com/nft-images/Cryptopunk_cyberpunk_1619026686095.jpg'
    },
    {
      name: 'BAYC Dark Ape',
      symbol: 'BAYCD',
      date: '23/12/22',
      price: '4566',
      img: 'https://airnfts.s3.amazonaws.com/nft-images/Cyber_Punk_004_1620157714307.gif'
    },
    {
      name: 'BAYC HipHop Ape',
      symbol: 'BAYCH',
      date: '23/12/22',
      price: '9000',
      img: 'https://i.pinimg.com/564x/2a/73/96/2a7396560b472d474f2c94f3a205bdb2.jpg',
    },
    {
      name: 'BAYC Fresh Ape',
      symbol: 'BAYCF',
      date: '23/12/22',
      price: '1222',
      img: 'https://i.pinimg.com/564x/26/66/27/2666277cce39f5cd37b2335e2aaafa0b.jpg'
    },
    {
      name: 'BAYC Dark Ape',
      symbol: 'BAYCD',
      date: '23/12/22',
      price: '4566',
      img: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg'
    },
    {
      name: 'BAYC HipHop Ape',
      symbol: 'BAYCH',
      date: '23/12/22',
      price: '9000',
      img: 'https://image.binance.vision/editor-uploads-original/9c15d9647b9643dfbc5e522299d13593.png',
    },
    {
      name: 'BAYC Fresh Ape',
      symbol: 'BAYCF',
      date: '23/12/22',
      price: '1222',
      img: 'https://watcher.guru/news/wp-content/uploads/2021/08/unnamed-2-1.png'
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="mx-5 text-white text-2xl font-semibold">My SBTs</div>
      <div className="grid grid-cols-3 grid-rows-1">
        {l.map((key, idx) => {
          return <ItemTile {...key} />;
        })}
      </div>
    </div>
  );
};

export default UserSoulBound;
