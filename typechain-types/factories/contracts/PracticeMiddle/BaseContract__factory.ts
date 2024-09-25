/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  BaseContract,
  BaseContractInterface,
} from "../../../contracts/PracticeMiddle/BaseContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialValue",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getValue",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161011d38038061011d83398101604081905261002f91610037565b600055610050565b60006020828403121561004957600080fd5b5051919050565b60bf8061005e6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c8063209652551460415780633fa4f2451460575780635524107714605f575b600080fd5b6000545b60405190815260200160405180910390f35b604560005481565b606f606a3660046071565b600055565b005b600060208284031215608257600080fd5b503591905056fea2646970667358221220beb198154959c7092e9b4ae6b2c505d75431ce33956899341284759e8e50987b64736f6c63430008140033";

type BaseContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseContract__factory extends ContractFactory {
  constructor(...args: BaseContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _initialValue: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_initialValue, overrides || {});
  }
  override deploy(
    _initialValue: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_initialValue, overrides || {}) as Promise<
      BaseContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BaseContract__factory {
    return super.connect(runner) as BaseContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseContractInterface {
    return new Interface(_abi) as BaseContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BaseContract {
    return new Contract(address, _abi, runner) as unknown as BaseContract;
  }
}
