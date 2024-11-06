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
  Divider,
  DividerInterface,
} from "../../../contracts/practice-junior/Divider";

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
    name: "divide",
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
  "0x6080604052348015600e575f80fd5b5061015f8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f88e9fbf1461002d575b5f80fd5b61004061003b3660046100d1565b610052565b60405190815260200160405180910390f35b5f8082116100c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4469766973696f6e206279207a65726f00000000000000000000000000000000604482015260640160405180910390fd5b6100ca82846100f1565b9392505050565b5f80604083850312156100e2575f80fd5b50508035926020909101359150565b5f82610124577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b50049056fea26469706673582212201e7fd61e3724425f68924887633ae78928e01b5b5b60f1640fb790ae2af256fc64736f6c634300081a0033";

type DividerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DividerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Divider__factory extends ContractFactory {
  constructor(...args: DividerConstructorParams) {
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
      Divider & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Divider__factory {
    return super.connect(runner) as Divider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DividerInterface {
    return new Interface(_abi) as DividerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Divider {
    return new Contract(address, _abi, runner) as unknown as Divider;
  }
}
