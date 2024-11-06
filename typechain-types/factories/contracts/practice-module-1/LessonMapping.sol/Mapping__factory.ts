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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Mapping,
  MappingInterface,
} from "../../../../contracts/practice-module-1/LessonMapping.sol/Mapping";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "get",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "myMap",
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
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_i",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506101c68061001c5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c806327cbd5291461004e57806329092d0e1461007f5780633825d828146100b5578063c2bc2efc146100eb575b5f80fd5b61006d61005c366004610148565b5f6020819052908152604090205481565b60405190815260200160405180910390f35b6100b361008d366004610148565b73ffffffffffffffffffffffffffffffffffffffff165f90815260208190526040812055565b005b6100b36100c3366004610168565b73ffffffffffffffffffffffffffffffffffffffff9091165f90815260208190526040902055565b61006d6100f9366004610148565b73ffffffffffffffffffffffffffffffffffffffff165f9081526020819052604090205490565b803573ffffffffffffffffffffffffffffffffffffffff81168114610143575f80fd5b919050565b5f60208284031215610158575f80fd5b61016182610120565b9392505050565b5f8060408385031215610179575f80fd5b61018283610120565b94602093909301359350505056fea2646970667358221220212cbb59d2a08a51978297972ffad44b53e3048cbb33c0ccf37c8aa9eaed462164736f6c634300081a0033";

type MappingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MappingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Mapping__factory extends ContractFactory {
  constructor(...args: MappingConstructorParams) {
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
      Mapping & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Mapping__factory {
    return super.connect(runner) as Mapping__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MappingInterface {
    return new Interface(_abi) as MappingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Mapping {
    return new Contract(address, _abi, runner) as unknown as Mapping;
  }
}
