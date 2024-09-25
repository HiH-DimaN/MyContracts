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
  EmployeeData,
  EmployeeDataInterface,
} from "../../../contracts/PracticeMiddle/EmployeeData";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_salary",
        type: "uint256",
      },
    ],
    name: "addEmploye",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "employees",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "salary",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getEmployee",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "salary",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEmployeeCount",
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
  "0x608060405234801561001057600080fd5b50610657806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634739326b1461005157806368722d441461007c578063bca9a5c514610091578063c2a63e3b146100a4575b600080fd5b61006461005f366004610372565b6100b5565b6040516100739392919061038b565b60405180910390f35b61008f61008a3660046103fe565b610173565b005b61006461009f366004610372565b61020e565b600054604051908152602001610073565b600081815481106100c557600080fd5b600091825260209091206003909102018054600182018054919350906100ea906104c2565b80601f0160208091040260200160405190810160405280929190818152602001828054610116906104c2565b80156101635780601f1061013857610100808354040283529160200191610163565b820191906000526020600020905b81548152906001019060200180831161014657829003601f168201915b5050505050908060020154905083565b604080516060810182528481526020810184815291810183905260008054600181018255908052815160039091027f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56381019182559251919290917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e564909101906101fc908261054b565b50604082015181600201555050505050565b600080546060908290841115610284576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e76616c696420656d706c6f79656520696e64657800000000000000000000604482015260640160405180910390fd5b60008085815481106102985761029861060b565b9060005260206000209060030201604051806060016040529081600082015481526020016001820180546102cb906104c2565b80601f01602080910402602001604051908101604052809291908181526020018280546102f7906104c2565b80156103445780601f1061031957610100808354040283529160200191610344565b820191906000526020600020905b81548152906001019060200180831161032757829003601f168201915b5050509183525050600291909101546020918201528151908201516040909201519097919650945092505050565b60006020828403121561038457600080fd5b5035919050565b83815260006020606081840152845180606085015260005b818110156103bf578681018301518582016080015282016103a3565b506000608082860101526080601f19601f83011685010192505050826040830152949350505050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561041357600080fd5b83359250602084013567ffffffffffffffff8082111561043257600080fd5b818601915086601f83011261044657600080fd5b813581811115610458576104586103e8565b604051601f8201601f19908116603f01168101908382118183101715610480576104806103e8565b8160405282815289602084870101111561049957600080fd5b826020860160208301376000602084830101528096505050505050604084013590509250925092565b600181811c908216806104d657607f821691505b6020821081036104f657634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561054657600081815260208120601f850160051c810160208610156105235750805b601f850160051c820191505b818110156105425782815560010161052f565b5050505b505050565b815167ffffffffffffffff811115610565576105656103e8565b6105798161057384546104c2565b846104fc565b602080601f8311600181146105ae57600084156105965750858301515b600019600386901b1c1916600185901b178555610542565b600085815260208120601f198616915b828110156105dd578886015182559484019460019091019084016105be565b50858210156105fb5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fdfea26469706673582212209066e8623df1c066b217b94ba393451afd843b7e64728bb3662b0e2ba41e5cac64736f6c63430008140033";

type EmployeeDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EmployeeDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EmployeeData__factory extends ContractFactory {
  constructor(...args: EmployeeDataConstructorParams) {
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
      EmployeeData & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EmployeeData__factory {
    return super.connect(runner) as EmployeeData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EmployeeDataInterface {
    return new Interface(_abi) as EmployeeDataInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): EmployeeData {
    return new Contract(address, _abi, runner) as unknown as EmployeeData;
  }
}
