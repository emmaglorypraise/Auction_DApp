import { useContractRead } from 'wagmi'
import { AUCTION_CONTRACT } from '../config'


const useAuctionRead = (functionName="") => {
  // console.log(AUCTION_CONTRACT, functionName);
  const { data, isError, isLoading } = useContractRead({
    ...AUCTION_CONTRACT,
    functionName,
  })
  console.log(data, isError, isLoading)
  return { data, isError, isLoading }
}

export default useAuctionRead