/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  BankHoneypot,
  BankHoneypotInterface,
} from "../../../../../contracts/practice-GuideDAO/security/BankHoneypot.sol/BankHoneypot";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logger",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b50604051610326380380610326833981016040819052602b91604e565b5f80546001600160a01b0319166001600160a01b03929092169190911790556079565b5f60208284031215605d575f80fd5b81516001600160a01b03811681146072575f80fd5b9392505050565b6102a0806100865f395ff3fe608060405260043610610028575f3560e01c80632e1a7d4d1461002c578063d0e30db01461004d575b5f80fd5b348015610037575f80fd5b5061004b6100463660046101fa565b610055565b005b61004b610151565b335f908152600160205260408120805483929061007390849061023e565b90915550506040515f90339083908381818185875af1925050503d805f81146100b7576040519150601f19603f3d011682016040523d82523d5f602084013e6100bc565b606091505b50509050806100c9575f80fd5b5f546040517f8309e8a80000000000000000000000000000000000000000000000000000000081523360048201526002602482015273ffffffffffffffffffffffffffffffffffffffff90911690638309e8a8906044015f604051808303815f87803b158015610137575f80fd5b505af1158015610149573d5f803e3d5ffd5b505050505050565b335f908152600160205260408120805434929061016f908490610257565b90915550505f546040517f8309e8a80000000000000000000000000000000000000000000000000000000081523360048201526001602482015273ffffffffffffffffffffffffffffffffffffffff90911690638309e8a8906044015f604051808303815f87803b1580156101e2575f80fd5b505af11580156101f4573d5f803e3d5ffd5b50505050565b5f6020828403121561020a575f80fd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8181038181111561025157610251610211565b92915050565b808201808211156102515761025161021156fea264697066735822122016b4f8ff4d8cd2f51c16d6dbdaaa4593110380e6a9d1589f5685d8223ccc628a64736f6c634300081a0033";

type BankHoneypotConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BankHoneypotConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BankHoneypot__factory extends ContractFactory {
  constructor(...args: BankHoneypotConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _logger: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_logger, overrides || {});
  }
  override deploy(
    _logger: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_logger, overrides || {}) as Promise<
      BankHoneypot & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BankHoneypot__factory {
    return super.connect(runner) as BankHoneypot__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BankHoneypotInterface {
    return new Interface(_abi) as BankHoneypotInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BankHoneypot {
    return new Contract(address, _abi, runner) as unknown as BankHoneypot;
  }
}
