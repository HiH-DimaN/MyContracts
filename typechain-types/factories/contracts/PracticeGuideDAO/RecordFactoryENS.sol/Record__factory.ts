/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Record,
  RecordInterface,
} from "../../../../contracts/PracticeGuideDAO/RecordFactoryENS.sol/Record";

const _abi = [
  {
    inputs: [],
    name: "timeOfCreation",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Record__factory {
  static readonly abi = _abi;
  static createInterface(): RecordInterface {
    return new Interface(_abi) as RecordInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Record {
    return new Contract(address, _abi, runner) as unknown as Record;
  }
}
