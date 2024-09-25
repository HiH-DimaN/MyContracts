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
  Factory,
  FactoryInterface,
} from "../../../contracts/PracticeGuideDAO/Factory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_delay",
        type: "uint256",
      },
    ],
    name: "createVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50608b8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80633655c87d14602d575b600080fd5b603b6038366004603d565b50565b005b600060208284031215604e57600080fd5b503591905056fea264697066735822122076585af3bd01439c0a668980ff63dd06ebfc318b854cf61925cc4baa37a3858164736f6c63430008140033";

type FactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Factory__factory extends ContractFactory {
  constructor(...args: FactoryConstructorParams) {
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
      Factory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Factory__factory {
    return super.connect(runner) as Factory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FactoryInterface {
    return new Interface(_abi) as FactoryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Factory {
    return new Contract(address, _abi, runner) as unknown as Factory;
  }
}
