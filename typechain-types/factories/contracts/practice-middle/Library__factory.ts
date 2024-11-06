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
  Library,
  LibraryInterface,
} from "../../../contracts/practice-middle/Library";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_isbn",
        type: "string",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_author",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_year",
        type: "uint256",
      },
    ],
    name: "addBook",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "books",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_isbn",
        type: "string",
      },
    ],
    name: "getBook",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "author",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_isbn",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_avialable",
        type: "bool",
      },
    ],
    name: "setBookAvailability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506108348061001c5f395ff3fe608060405234801561000f575f80fd5b506004361061004a575f3560e01c806302d74d7e1461004e5780632b9dfe801461006357806345e6df3d1461008f578063c37a8361146100a2575b5f80fd5b61006161005c366004610502565b6100b5565b005b610076610071366004610555565b6100ec565b60405161008694939291906105bd565b60405180910390f35b61006161009d3660046105fa565b61022e565b6100766100b0366004610555565b6102be565b805f836040516100c59190610690565b908152604051908190036020019020600301805491151560ff199092169190911790555050565b80516020818301810180515f82529282019190930120915280548190610111906106a6565b80601f016020809104026020016040519081016040528092919081815260200182805461013d906106a6565b80156101885780601f1061015f57610100808354040283529160200191610188565b820191905f5260205f20905b81548152906001019060200180831161016b57829003601f168201915b50505050509080600101805461019d906106a6565b80601f01602080910402602001604051908101604052809291908181526020018280546101c9906106a6565b80156102145780601f106101eb57610100808354040283529160200191610214565b820191905f5260205f20905b8154815290600101906020018083116101f757829003601f168201915b50505050600283015460039093015491929160ff16905084565b6040518060800160405280848152602001838152602001828152602001600115158152505f856040516102619190610690565b9081526040519081900360200190208151819061027e9082610743565b50602082015160018201906102939082610743565b50604082015160028201556060909101516003909101805460ff191691151591909117905550505050565b6060805f805f80866040516102d39190610690565b90815260200160405180910390206040518060800160405290815f820180546102fb906106a6565b80601f0160208091040260200160405190810160405280929190818152602001828054610327906106a6565b80156103725780601f1061034957610100808354040283529160200191610372565b820191905f5260205f20905b81548152906001019060200180831161035557829003601f168201915b5050505050815260200160018201805461038b906106a6565b80601f01602080910402602001604051908101604052809291908181526020018280546103b7906106a6565b80156104025780601f106103d957610100808354040283529160200191610402565b820191905f5260205f20905b8154815290600101906020018083116103e557829003601f168201915b5050509183525050600282015460208083019190915260039092015460ff161515604091820152825191830151908301516060909301519199909850919650945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f82601f830112610485575f80fd5b813567ffffffffffffffff81111561049f5761049f610449565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff821117156104cf576104cf610449565b6040528181528382016020018510156104e6575f80fd5b816020850160208301375f918101602001919091529392505050565b5f8060408385031215610513575f80fd5b823567ffffffffffffffff811115610529575f80fd5b61053585828601610476565b9250506020830135801515811461054a575f80fd5b809150509250929050565b5f60208284031215610565575f80fd5b813567ffffffffffffffff81111561057b575f80fd5b61058784828501610476565b949350505050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b608081525f6105cf608083018761058f565b82810360208401526105e1818761058f565b6040840195909552505090151560609091015292915050565b5f805f806080858703121561060d575f80fd5b843567ffffffffffffffff811115610623575f80fd5b61062f87828801610476565b945050602085013567ffffffffffffffff81111561064b575f80fd5b61065787828801610476565b935050604085013567ffffffffffffffff811115610673575f80fd5b61067f87828801610476565b949793965093946060013593505050565b5f82518060208501845e5f920191825250919050565b600181811c908216806106ba57607f821691505b6020821081036106f1577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f82111561073e57805f5260205f20601f840160051c8101602085101561071c5750805b601f840160051c820191505b8181101561073b575f8155600101610728565b50505b505050565b815167ffffffffffffffff81111561075d5761075d610449565b6107718161076b84546106a6565b846106f7565b6020601f8211600181146107a3575f831561078c5750848201515b5f19600385901b1c1916600184901b17845561073b565b5f84815260208120601f198516915b828110156107d257878501518255602094850194600190920191016107b2565b50848210156107ef57868401515f19600387901b60f8161c191681555b50505050600190811b0190555056fea2646970667358221220a3d868a51f4ac6936c3ab2d2b7d3358cf3980324e46cfa6429bedd3ee6c7010c64736f6c634300081a0033";

type LibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Library__factory extends ContractFactory {
  constructor(...args: LibraryConstructorParams) {
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
      Library & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Library__factory {
    return super.connect(runner) as Library__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibraryInterface {
    return new Interface(_abi) as LibraryInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Library {
    return new Contract(address, _abi, runner) as unknown as Library;
  }
}