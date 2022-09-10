import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import RightArrow from "../components/commons/icons/RightArrow";
import useAuctionRead from "../hooks/useAuctionRead";

const Home: NextPage = () => {
  const { data, isError, isLoading} = useAuctionRead("started");
  console.log("data:", data, "isError:", isError, "isLoading", isLoading)
  return (
    <div>
      <div className="flex justify-between w-11/12 mx-auto">
        <div className="flex-1">
          <Image src="https://source.unsplash.com/random/?money" width={600} height={500} />
          {/* <img
            src="https://source.unsplash.com/random/?productivity,city
"
            alt="productivity"
            className="w-full"
          /> */}
        </div>
        <div className="flex-1 flex justify-center place-items-center text-center text-black rounded-md bg-white">
          <div className="">
            <h1 className="text-black my-6 ">
              <button className="border flex items-center justify-between rounded-md bg-black text-white py-3 px-6 mx-auto">Start Auction <RightArrow className="ml-4"/> </button>
            </h1>

            <div>
              <span className="text-center"> Highest Bid: <span className="my-2 text-2xl mx-1">45</span><span className="my-1 text-xs">ETH</span></span>
            </div>

            <div className="w-full mt-4">
              <input type="text" placeholder="Enter your bid" className="w-3/4 p-2 bg-white my-6 text-left border rounded-md" />
              <button className="w-3/4 border rounded-md text-white bg-red-600 p-2">Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
