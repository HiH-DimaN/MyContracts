/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  DemoNew,
  DemoNewInterface,
} from "../../../contracts/practice-GuideDAO/DemoNew";

const _abi = [
  {
    inputs: [],
    name: "balance",
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
    inputs: [],
    name: "contractAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "demo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "limit",
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
    inputs: [],
    name: "number",
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
    inputs: [],
    name: "price",
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
    inputs: [],
    name: "sender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sum",
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
    inputs: [],
    name: "timestamp",
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
  "0x6080604052348015600e575f80fd5b5061022b8061001c5f395ff3fe608060405260043610610093575f3560e01c8063853255cc11610066578063a4d66daf1161004c578063a4d66daf146101b6578063b69ef8a8146101cb578063b80777ea146101e0575f80fd5b8063853255cc1461018d578063a035b1fe146101a1575f80fd5b806301725a0b1461009757806315a5d9d8146100e857806367e404ce1461013e5780638381f58a1461016a575b5f80fd5b345f5560018054337fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091554260025543600355456004553a600555600680543092168217905531600755005b3480156100f3575f80fd5b506006546101149073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b348015610149575f80fd5b506001546101149073ffffffffffffffffffffffffffffffffffffffff1681565b348015610175575f80fd5b5061017f60035481565b604051908152602001610135565b348015610198575f80fd5b5061017f5f5481565b3480156101ac575f80fd5b5061017f60055481565b3480156101c1575f80fd5b5061017f60045481565b3480156101d6575f80fd5b5061017f60075481565b3480156101eb575f80fd5b5061017f6002548156fea2646970667358221220cc12041e02c93ae67f77a95401b63fe7cbd150e96431803b34060369686a00f464736f6c634300081a0033";

type DemoNewConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DemoNewConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DemoNew__factory extends ContractFactory {
  constructor(...args: DemoNewConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      DemoNew & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DemoNew__factory {
    return super.connect(runner) as DemoNew__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DemoNewInterface {
    return new Interface(_abi) as DemoNewInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DemoNew {
    return new Contract(address, _abi, runner) as unknown as DemoNew;
  }
}
