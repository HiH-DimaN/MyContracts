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
  DataConsumer,
  DataConsumerInterface,
} from "../../../contracts/practice-middle/DataConsumer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dataProviderAddress",
        type: "address",
      },
    ],
    name: "fetchData",
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
        name: "dataProviderAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newData",
        type: "uint256",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506103e98061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80638130872114610038578063c4bfd57d1461004d575b5f80fd5b61004b61004636600461033e565b610072565b005b61006061005b366004610366565b6101d1565b60405190815260200160405180910390f35b5f8273ffffffffffffffffffffffffffffffffffffffff168260405160240161009d91815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5b4b73a9000000000000000000000000000000000000000000000000000000001790525161011e9190610386565b5f604051808303815f865af19150503d805f8114610157576040519150601f19603f3d011682016040523d82523d5f602084013e61015c565b606091505b50509050806101cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f43616c6c206661696c656400000000000000000000000000000000000000000060448201526064015b60405180910390fd5b505050565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f3bc5de300000000000000000000000000000000000000000000000000000000017905290515f918291829173ffffffffffffffffffffffffffffffffffffffff8616916102519190610386565b5f60405180830381855afa9150503d805f8114610289576040519150601f19603f3d011682016040523d82523d5f602084013e61028e565b606091505b5091509150816102fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f43616c6c206661696c656400000000000000000000000000000000000000000060448201526064016101c3565b8080602001905181019061030e919061039c565b949350505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610339575f80fd5b919050565b5f806040838503121561034f575f80fd5b61035883610316565b946020939093013593505050565b5f60208284031215610376575f80fd5b61037f82610316565b9392505050565b5f82518060208501845e5f920191825250919050565b5f602082840312156103ac575f80fd5b505191905056fea2646970667358221220a921a482fe9305edbdfd8f1ca2b2dcd399d840682b9d72c9adab32f42baa80aa64736f6c634300081a0033";

type DataConsumerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DataConsumerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DataConsumer__factory extends ContractFactory {
  constructor(...args: DataConsumerConstructorParams) {
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
      DataConsumer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DataConsumer__factory {
    return super.connect(runner) as DataConsumer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DataConsumerInterface {
    return new Interface(_abi) as DataConsumerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DataConsumer {
    return new Contract(address, _abi, runner) as unknown as DataConsumer;
  }
}
