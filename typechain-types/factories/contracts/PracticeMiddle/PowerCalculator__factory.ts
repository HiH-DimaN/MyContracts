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
  PowerCalculator,
  PowerCalculatorInterface,
} from "../../../contracts/PracticeMiddle/PowerCalculator";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "base",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exponent",
        type: "uint256",
      },
    ],
    name: "calculatePower",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610170806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063f979f26914610030575b600080fd5b61004361003e36600461009a565b610055565b60405190815260200160405180910390f35b60008160000361006757506001610094565b50600160005b8281116100925761007e84836100eb565b91508061008a81610102565b91505061006d565b505b92915050565b600080604083850312156100ad57600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082028115828204841417610094576100946100bc565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610133576101336100bc565b506001019056fea26469706673582212206287a866570b4732f8186a1a44085879de187558460f8e7a6e9f39d441ea5f5864736f6c63430008140033";

type PowerCalculatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PowerCalculatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PowerCalculator__factory extends ContractFactory {
  constructor(...args: PowerCalculatorConstructorParams) {
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
      PowerCalculator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PowerCalculator__factory {
    return super.connect(runner) as PowerCalculator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PowerCalculatorInterface {
    return new Interface(_abi) as PowerCalculatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): PowerCalculator {
    return new Contract(address, _abi, runner) as unknown as PowerCalculator;
  }
}
