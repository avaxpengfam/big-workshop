import { Contract } from "web3-eth-contract";
import Web3 from "web3";

import bbuxContractArtifacts from "./contracts/PengFam.json";

//@ts-ignore
const ETHEREUM = window.ethereum;
// const PENG_FAM_CONTRACT = "0xa822793992F75dAfAB322672747D98019F7a8349";
const PENG_FAM_CONTRACT = "0x393b4e7cDD7aA4B406f4e97876b3A84fAF04D6d8";

export const useWeb3 = () => {
  const web3 = new Web3(ETHEREUM);
  if (ETHEREUM) {
    ETHEREUM.enable();
  }

  const pengFamilyContractERC720 = new web3.eth.Contract(
    bbuxContractArtifacts.abi as any,
    PENG_FAM_CONTRACT
  );
  return { web3, pengFamilyContractERC720 };
};
