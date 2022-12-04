import React from "react";
import ItemTile from "../../components/Common/ItemTile";
import Navbar from "../../components/Common/Navbar";

const UserWhitelistedContracts = () => {
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
    <div className="bg-black">
      <Navbar />
      <div className="m-5 mx-10 text-white text-4xl font-semibold font-fragile">My SoulBound Tokens</div>
      <div className="grid grid-cols-4 grid-rows-1 justify-items-center items-center gap-16">
        {l.map((key, idx) => {
          return <ItemTile {...key} />;
        })}
      </div>
    </div>
  );
};

export default UserWhitelistedContracts;
