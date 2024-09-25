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
  BooleanStorage,
  BooleanStorageInterface,
} from "../../../contracts/PracticeJunior/BooleanStorage";

const _abi = [
  {
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "x",
        type: "bool",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "storedBoolean",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610106806100206000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c80635c7ad8461460415780635f76f6ab1460615780636d4ce63c14609f575b600080fd5b600054604d9060ff1681565b604051901515815260200160405180910390f35b609d606c36600460a9565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b005b60005460ff16604d565b60006020828403121560ba57600080fd5b8135801515811460c957600080fd5b939250505056fea2646970667358221220d66f19adf233d365aea395a7c84cd2ba07942a5640fe1af4081e8a37d4c8bfc364736f6c63430008140033";

type BooleanStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BooleanStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BooleanStorage__factory extends ContractFactory {
  constructor(...args: BooleanStorageConstructorParams) {
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
      BooleanStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BooleanStorage__factory {
    return super.connect(runner) as BooleanStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BooleanStorageInterface {
    return new Interface(_abi) as BooleanStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BooleanStorage {
    return new Contract(address, _abi, runner) as unknown as BooleanStorage;
  }
}
