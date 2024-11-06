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
  InputValidation,
  InputValidationInterface,
} from "../../../contracts/practice-junior/InputValidation";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "validation",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b5061019e8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063b72bedd01461002d575b5f80fd5b61004061003b3660046100fe565b610056565b60405161004d9190610115565b60405180910390f35b6060815f036100c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f56616c7565206d757374206265206e6f6e2d7a65726f00000000000000000000604482015260640160405180910390fd5b505060408051808201909152600b81527f56616c696420696e707574000000000000000000000000000000000000000000602082015290565b5f6020828403121561010e575f80fd5b5035919050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fea264697066735822122058c55841ee4536e9fa96ae80f9707d44806aa5ae6ddb62b6afefd3888211666f64736f6c634300081a0033";

type InputValidationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InputValidationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InputValidation__factory extends ContractFactory {
  constructor(...args: InputValidationConstructorParams) {
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
      InputValidation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): InputValidation__factory {
    return super.connect(runner) as InputValidation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InputValidationInterface {
    return new Interface(_abi) as InputValidationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InputValidation {
    return new Contract(address, _abi, runner) as unknown as InputValidation;
  }
}
