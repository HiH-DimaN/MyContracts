/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  BaseRecordFactory,
  BaseRecordFactoryInterface,
} from "../../../../contracts/practice-GuideDAO/RecordFactoryENS.sol/BaseRecordFactory";

const _abi = [
  {
    inputs: [],
    name: "recordsStorage",
    outputs: [
      {
        internalType: "contract IRecordStorage",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class BaseRecordFactory__factory {
  static readonly abi = _abi;
  static createInterface(): BaseRecordFactoryInterface {
    return new Interface(_abi) as BaseRecordFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BaseRecordFactory {
    return new Contract(address, _abi, runner) as unknown as BaseRecordFactory;
  }
}
