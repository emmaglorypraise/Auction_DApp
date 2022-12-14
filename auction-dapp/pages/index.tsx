import React, {useState} from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useAccount } from "wagmi"
import RightArrow from "../components/commons/icons/RightArrow";
import useAuctionRead from "../hooks/useAuctionRead";
import useAuctionWrite from "../hooks/useAuctionWrite";

const Home: NextPage = () => {
  const [amount, setAmount] = useState(0);
  const {address} = useAccount();
  const {data:started, isError, isLoading} = useAuctionRead("started");
  const {data:ended} = useAuctionRead("ended");
  const {data:ownerAddress} = useAuctionRead("owner");
  const {writeAsync, data:writeData, isError:writeError, isLoading:writeLoading} = useAuctionWrite("Auction");
  const {writeAsync:bidAsync, isLoading:bidLoading} = useAuctionWrite("bid", amount);


  // console.log(ownerAddress, "owners address");

  // console.log("data:", ended)
    // console.log("start:", started)

  // const startAuction =async () => {
  //   try {
  //     const tx = await writeAsync?.();
  //     console.log(tx);
  //     const wait = await tx?.wait();
  //     console.log(wait);
  //   } catch (error) {
  //     console.log(error)
  //   } finally {

  //   }
  // }

  //type for input
  const handleAmount = (e:any) => {
    setAmount(e.target.value)
  }

  const isAdmin = ownerAddress === address ? true : false;

  const _statusButton = () => {
    if(isLoading){
      return <div>Loading....</div>
    }
    if(isError){
      return <div>Error....</div>
    }
    if(isAdmin && !started){
      <button  onClick={() => writeAsync?.()} className="border flex items-center justify-between rounded-md bg-black text-white py-3 px-6 mx-auto">{writeLoading ? "Loading..." : "Start Auction"}  <RightArrow className="ml-4"/> </button>
    }
    if(!started) {
      <button className="border flex items-center justify-between rounded-md bg-black text-white py-3 px-6 mx-auto">Auction Not Started <RightArrow className="ml-4"/> </button>
    }
    if(started && !ended){
      <button className="border flex items-center justify-between rounded-md bg-black text-white py-3 px-6 mx-auto">Auction In Progress <RightArrow className="ml-4"/> </button>
    }
    if(ended){
      <button className="border flex items-center justify-between rounded-md bg-black text-white py-3 px-6 mx-auto">Auction In Progress <RightArrow className="ml-4"/> </button>
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between w-11/12 mx-auto">
        <div className="flex-1">
          <Image src="https://source.unsplash.com/random/?money" width={700} height={500} />
        </div>
        <div className="flex-1 flex justify-center py-6 place-items-center text-center text-black rounded-md bg-white">
          <div className="">
            
            <div className="mb-6">
            {_statusButton()}
            </div>

            <div>
              <span className="text-center"> Highest Bid: <span className="my-2 text-2xl mx-1">45</span><span className="my-1 text-xs">ETH</span></span>
            </div>

            <div className="w-full mt-4">
              <input onChange={handleAmount} type="number" value={amount} placeholder="Enter your bid" className="w-3/4 p-2 bg-white my-6 text-left border rounded-md" />
              <button 
              type="button"
              // disabled={bidLoading|| !amount || !started}
              onClick={()=> bidAsync?.()}
              className="w-3/4 border rounded-md text-white bg-red-600 p-2">Place bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
