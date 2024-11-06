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
import type { NonPayableOverrides } from "../../../common";
import type {
  SharedWallet,
  SharedWalletInterface,
} from "../../../contracts/practice-GuideDAO/SharedWallet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "AdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
    ],
    name: "AdminRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLimit",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLimit",
        type: "uint256",
      },
    ],
    name: "LimitChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isAdmin",
        type: "bool",
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
    ],
    name: "makeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "members",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "is_admin",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
    ],
    name: "revokeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "memberAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "limit",
        type: "uint256",
      },
    ],
    name: "setLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604051610b39380380610b3983398101604081905261002e9161012b565b806001600160a01b03811661005c57604051631e4fbdf760e01b81525f600482015260240160405180910390fd5b610065816100dc565b506040805160a0810182526005606082019081526427bbb732b960d91b608083015281525f60208083018290526001838501819052338352905291909120815181906100b190826101f0565b50602082015160018201556040909101516002909101805460ff1916911515919091179055506102aa565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f6020828403121561013b575f80fd5b81516001600160a01b0381168114610151575f80fd5b9392505050565b634e487b7160e01b5f52604160045260245ffd5b600181811c9082168061018057607f821691505b60208210810361019e57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101eb57805f5260205f20601f840160051c810160208510156101c95750805b601f840160051c820191505b818110156101e8575f81556001016101d5565b50505b505050565b81516001600160401b0381111561020957610209610158565b61021d81610217845461016c565b846101a4565b6020601f82116001811461024f575f83156102385750848201515b5f19600385901b1c1916600184901b1784556101e8565b5f84815260208120601f198516915b8281101561027e578785015182556020948501946001909201910161025e565b508482101561029b57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b610882806102b75f395ff3fe608060405234801561000f575f80fd5b5060043610610085575f3560e01c8063472905ca11610058578063472905ca146100ef578063715018a6146101025780638da5cb5b1461010a578063f2fde38b14610124575f80fd5b806308ae4b0c14610089578063123b883e146100b45780632d345670146100c957806336db43b5146100dc575b5f80fd5b61009c61009736600461054d565b610137565b6040516100ab9392919061056d565b60405180910390f35b6100c76100c23660046105ee565b6101e2565b005b6100c76100d736600461054d565b6102aa565b6100c76100ea3660046106cc565b6102fd565b6100c76100fd36600461054d565b610366565b6100c76103bf565b5f546040516001600160a01b0390911681526020016100ab565b6100c761013236600461054d565b61042e565b60016020525f9081526040902080548190610151906106f4565b80601f016020809104026020016040519081016040528092919081815260200182805461017d906106f4565b80156101c85780601f1061019f576101008083540402835291602001916101c8565b820191905f5260205f20905b8154815290600101906020018083116101ab57829003601f168201915b50505050600183015460029093015491929160ff16905083565b6101ea610484565b6001600160a01b0384165f8181526001602081815260408084208084015482516060810184528a81528085018a905288151593810193909352959094529190528051909190819061023b9082610791565b5060208281015160018301556040928301516002909201805460ff19169215159290921790915581518381529081018590526001600160a01b038716917fa6d91b9da806ef5c961905320a650cef8e6caf5eaef0bc5441b85c0b5d662910910160405180910390a25050505050565b6102b2610484565b6001600160a01b0381165f81815260016020526040808220600201805460ff19169055517f631ff1c4e1a02c54b480a34b810e03bcee61fe38efcb243930a7f820914923e29190a250565b610305610484565b6001600160a01b0382165f81815260016020818152604092839020909101805490859055825181815291820185905292917fa6d91b9da806ef5c961905320a650cef8e6caf5eaef0bc5441b85c0b5d662910910160405180910390a2505050565b61036e610484565b6001600160a01b0381165f818152600160208190526040808320600201805460ff1916909217909155517f44d6d25963f097ad14f29f06854a01f575648a1ef82f30e562ccd3889717e3399190a250565b6103c7610484565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f43616e27742072656e6f756e636521000000000000000000000000000000000060448201526064015b60405180910390fd5b610436610484565b6001600160a01b038116610478576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081525f6004820152602401610425565b610481816104cb565b50565b5f546001600160a01b031633146104c9576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610425565b565b5f80546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b0381168114610548575f80fd5b919050565b5f6020828403121561055d575f80fd5b61056682610532565b9392505050565b606081525f84518060608401528060208701608085015e5f608082850101526080601f19601f8301168401019150508360208301528215156040830152949350505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b80358015158114610548575f80fd5b5f805f8060808587031215610601575f80fd5b61060a85610532565b9350602085013567ffffffffffffffff811115610625575f80fd5b8501601f81018713610635575f80fd5b803567ffffffffffffffff81111561064f5761064f6105b2565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff8211171561067f5761067f6105b2565b604052818152828201602001891015610696575f80fd5b816020840160208301375f91810160200191909152935050604085013591506106c1606086016105df565b905092959194509250565b5f80604083850312156106dd575f80fd5b6106e683610532565b946020939093013593505050565b600181811c9082168061070857607f821691505b60208210810361073f577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f82111561078c57805f5260205f20601f840160051c8101602085101561076a5750805b601f840160051c820191505b81811015610789575f8155600101610776565b50505b505050565b815167ffffffffffffffff8111156107ab576107ab6105b2565b6107bf816107b984546106f4565b84610745565b6020601f8211600181146107f1575f83156107da5750848201515b5f19600385901b1c1916600184901b178455610789565b5f84815260208120601f198516915b828110156108205787850151825560209485019460019092019101610800565b508482101561083d57868401515f19600387901b60f8161c191681555b50505050600190811b0190555056fea26469706673582212205a78b5f218988e7e7bb97dccd2b0a501956d4030edb8526726353e29ea611cf764736f6c634300081a0033";

type SharedWalletConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SharedWalletConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SharedWallet__factory extends ContractFactory {
  constructor(...args: SharedWalletConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  override deploy(
    _owner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_owner, overrides || {}) as Promise<
      SharedWallet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SharedWallet__factory {
    return super.connect(runner) as SharedWallet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SharedWalletInterface {
    return new Interface(_abi) as SharedWalletInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SharedWallet {
    return new Contract(address, _abi, runner) as unknown as SharedWallet;
  }
}
