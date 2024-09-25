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
  DerivedContract,
  DerivedContractInterface,
} from "../../../contracts/PracticeModule2/DerivedContract";

const _abi = [
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_ownerContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610323806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806306661abd14610046578063a6348c8014610061578063d09de08a14610076575b600080fd5b61004f60005481565b60405190815260200160405180910390f35b61007461006f36600461023c565b61007e565b005b6100746101fa565b60405173ffffffffffffffffffffffffffffffffffffffff82166024820152600090604401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f13af4035000000000000000000000000000000000000000000000000000000001790525190915060009073ffffffffffffffffffffffffffffffffffffffff85169061014390849061026f565b6000604051808303816000865af19150503d8060008114610180576040519150601f19603f3d011682016040523d82523d6000602084013e610185565b606091505b50509050806101f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f43616c6c20746f204f776e6572436f6e7472616374206661696c656400000000604482015260640160405180910390fd5b50505050565b600260008082825461020c919061029e565b9091555050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461023757600080fd5b919050565b6000806040838503121561024f57600080fd5b61025883610213565b915061026660208401610213565b90509250929050565b6000825160005b818110156102905760208186018101518583015201610276565b506000920191825250919050565b80820182811260008312801582168215821617156102e5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50509291505056fea2646970667358221220a46530bf0cbd64ea0e714b49ac24d12de950b2e6ce0b224dcb2efa8c447c20ac64736f6c63430008140033";

type DerivedContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DerivedContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DerivedContract__factory extends ContractFactory {
  constructor(...args: DerivedContractConstructorParams) {
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
      DerivedContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): DerivedContract__factory {
    return super.connect(runner) as DerivedContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DerivedContractInterface {
    return new Interface(_abi) as DerivedContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): DerivedContract {
    return new Contract(address, _abi, runner) as unknown as DerivedContract;
  }
}
