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
  Subtracter,
  SubtracterInterface,
} from "../../../contracts/practice-junior/Subtracter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "y",
        type: "uint256",
      },
    ],
    name: "subtract",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b5060e98061001b5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c80633ef5e44514602a575b5f80fd5b60396035366004605d565b604b565b60405190815260200160405180910390f35b5f60548284607c565b90505b92915050565b5f8060408385031215606d575f80fd5b50508035926020909101359150565b818103818111156057577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea2646970667358221220cd8bb7aa54707abafec8f1d5f43286420e378640457caae1c02faa6719a2d6f764736f6c634300081a0033";

type SubtracterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubtracterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Subtracter__factory extends ContractFactory {
  constructor(...args: SubtracterConstructorParams) {
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
      Subtracter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Subtracter__factory {
    return super.connect(runner) as Subtracter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubtracterInterface {
    return new Interface(_abi) as SubtracterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Subtracter {
    return new Contract(address, _abi, runner) as unknown as Subtracter;
  }
}