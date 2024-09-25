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
  UseLibraries,
  UseLibrariesInterface,
} from "../../../../contracts/PracticeModule1/LessonLibrary.sol/UseLibraries";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "multiplyNumbers",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "subtractNumbers",
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
  "0x6080604052348015600e575f80fd5b506101c78061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80638f744c3214610038578063d3f3cd7b1461005d575b5f80fd5b61004b61004636600461011e565b610070565b60405190815260200160405180910390f35b61004b61006b36600461011e565b61010d565b6040517f5d4e1e5c00000000000000000000000000000000000000000000000000000000815260048101839052602481018290525f9073__$91b1213c9937351f7ee9f99e8824237f16$__90635d4e1e5c90604401602060405180830381865af41580156100e0573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610104919061013e565b90505b92915050565b5f61010483835f6101048284610155565b5f806040838503121561012f575f80fd5b50508035926020909101359150565b5f6020828403121561014e575f80fd5b5051919050565b8082028115828204841417610107577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffdfea2646970667358221220f8e31e69fedaf0fc6a35e8808071cf90dca188e1a27e24f600d17bf2e40e2bd464736f6c634300081a0033";

type UseLibrariesConstructorParams =
  | [linkLibraryAddresses: UseLibrariesLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UseLibrariesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class UseLibraries__factory extends ContractFactory {
  constructor(...args: UseLibrariesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        UseLibraries__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: UseLibrariesLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$91b1213c9937351f7ee9f99e8824237f16\\$__", "g"),
      linkLibraryAddresses[
        "contracts/PracticeModule1/LessonExternalLibrary.sol:LessonExternalLibrary"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      UseLibraries & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UseLibraries__factory {
    return super.connect(runner) as UseLibraries__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UseLibrariesInterface {
    return new Interface(_abi) as UseLibrariesInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UseLibraries {
    return new Contract(address, _abi, runner) as unknown as UseLibraries;
  }
}

export interface UseLibrariesLibraryAddresses {
  ["contracts/PracticeModule1/LessonExternalLibrary.sol:LessonExternalLibrary"]: string;
}