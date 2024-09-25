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
import type { NonPayableOverrides } from "../../../../common";
import type {
  AddressRecord,
  AddressRecordInterface,
} from "../../../../contracts/PracticeGuideDAO/RecordFactoryENS.sol/AddressRecord";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_record",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getRecordType",
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
  {
    inputs: [],
    name: "record",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_record",
        type: "address",
      },
    ],
    name: "setRecord",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeOfCreation",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102c23803806102c283398101604081905261002f91610058565b42600055600180546001600160a01b0319166001600160a01b0392909216919091179055610088565b60006020828403121561006a57600080fd5b81516001600160a01b038116811461008157600080fd5b9392505050565b61022b806100976000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630781f5c9146100515780631dcd69ec14610099578063266cf109146100b0578063c37787d9146100f5575b600080fd5b604080518082018252600781527f616464726573730000000000000000000000000000000000000000000000000060208201529051610090919061014c565b60405180910390f35b6100a260005481565b604051908152602001610090565b6001546100d09073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610090565b61014a6101033660046101b8565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b005b600060208083528351808285015260005b818110156101795785810183015185820160400152820161015d565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b6000602082840312156101ca57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101ee57600080fd5b939250505056fea2646970667358221220926f5d4ec5185ca08249b35a132a5a04126a1994b2364dddce3f50828d1fb54564736f6c63430008140033";

type AddressRecordConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressRecordConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressRecord__factory extends ContractFactory {
  constructor(...args: AddressRecordConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _record: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_record, overrides || {});
  }
  override deploy(
    _record: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_record, overrides || {}) as Promise<
      AddressRecord & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddressRecord__factory {
    return super.connect(runner) as AddressRecord__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressRecordInterface {
    return new Interface(_abi) as AddressRecordInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddressRecord {
    return new Contract(address, _abi, runner) as unknown as AddressRecord;
  }
}
