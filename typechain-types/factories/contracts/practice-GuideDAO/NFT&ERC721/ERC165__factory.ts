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
  ERC165,
  ERC165Interface,
} from "../../../../contracts/practice-GuideDAO/NFT&ERC721/ERC165";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  "0x6080604052348015600e575f80fd5b5061010a8061001c5f395ff3fe6080604052348015600e575f80fd5b50600436106026575f3560e01c806301ffc9a714602a575b5f80fd5b607c60353660046090565b7fffffffff00000000000000000000000000000000000000000000000000000000167f01ffc9a7000000000000000000000000000000000000000000000000000000001490565b604051901515815260200160405180910390f35b5f60208284031215609f575f80fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811460cd575f80fd5b939250505056fea26469706673582212205a04ffbb9002d2b05c23b3749e5f81d01b56906785ee4034febdb6c87a6a5f2f64736f6c634300081a0033";

type ERC165ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC165ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC165__factory extends ContractFactory {
  constructor(...args: ERC165ConstructorParams) {
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
      ERC165 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC165__factory {
    return super.connect(runner) as ERC165__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC165Interface {
    return new Interface(_abi) as ERC165Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC165 {
    return new Contract(address, _abi, runner) as unknown as ERC165;
  }
}
