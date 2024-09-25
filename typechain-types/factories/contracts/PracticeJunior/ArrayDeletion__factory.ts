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
  ArrayDeletion,
  ArrayDeletionInterface,
} from "../../../contracts/PracticeJunior/ArrayDeletion";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "addNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getNumber",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "numbers",
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
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610391806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063d39fa23314610051578063eea54fb614610076578063fc5636581461008b578063fce680231461009e575b600080fd5b61006461005f36600461029c565b6100de565b60405190815260200160405180910390f35b61008961008436600461029c565b6100ff565b005b61006461009936600461029c565b61020b565b6100896100ac36600461029c565b600080546001810182559080527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5630155565b600081815481106100ee57600080fd5b600091825260209091200154905081565b600054811061016f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e64730000000000000000000000000060448201526064015b60405180910390fd5b805b600054610180906001906102cb565b8110156101e05760006101948260016102e4565b815481106101a4576101a46102f7565b9060005260206000200154600082815481106101c2576101c26102f7565b600091825260209091200155806101d88161030d565b915050610171565b5060008054806101f2576101f2610345565b6001900381819060005260206000200160009055905550565b600080548210610277576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f496e646578206f7574206f6620626f756e6473000000000000000000000000006044820152606401610166565b6000828154811061028a5761028a6102f7565b90600052602060002001549050919050565b6000602082840312156102ae57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156102de576102de6102b5565b92915050565b808201808211156102de576102de6102b5565b634e487b7160e01b600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361033e5761033e6102b5565b5060010190565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220553b3424073afa0a0e857142c7426e3bdca7332281d1553e839d1d53728fc1bb64736f6c63430008140033";

type ArrayDeletionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArrayDeletionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArrayDeletion__factory extends ContractFactory {
  constructor(...args: ArrayDeletionConstructorParams) {
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
      ArrayDeletion & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ArrayDeletion__factory {
    return super.connect(runner) as ArrayDeletion__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArrayDeletionInterface {
    return new Interface(_abi) as ArrayDeletionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ArrayDeletion {
    return new Contract(address, _abi, runner) as unknown as ArrayDeletion;
  }
}
