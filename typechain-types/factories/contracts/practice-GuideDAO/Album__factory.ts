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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Album,
  AlbumInterface,
} from "../../../contracts/practice-GuideDAO/Album";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "contract AlbumTracker",
        name: "_tracker",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "index",
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
    inputs: [],
    name: "price",
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
    inputs: [],
    name: "purchased",
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
  {
    inputs: [],
    name: "title",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b5060405161070a38038061070a83398101604081905261002e9161009b565b5f849055600161003e84826101f5565b50600391909155600480546001600160a01b0319166001600160a01b03909216919091179055506102af9050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b0381168114610096575f80fd5b919050565b5f805f80608085870312156100ae575f80fd5b845160208601519094506001600160401b038111156100cb575f80fd5b8501601f810187136100db575f80fd5b80516001600160401b038111156100f4576100f461006c565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101225761012261006c565b604052818152828201602001891015610139575f80fd5b8160208401602083015e5f9181016020019190915260408701519094509250610166905060608601610080565b905092959194509250565b600181811c9082168061018557607f821691505b6020821081036101a357634e487b7160e01b5f52602260045260245ffd5b50919050565b601f8211156101f057805f5260205f20601f840160051c810160208510156101ce5750805b601f840160051c820191505b818110156101ed575f81556001016101da565b50505b505050565b81516001600160401b0381111561020e5761020e61006c565b6102228161021c8454610171565b846101a9565b6020601f821160018114610254575f831561023d5750848201515b5f19600385901b1c1916600184901b1784556101ed565b5f84815260208120601f198516915b828110156102835787850151825560209485019460019092019101610263565b50848210156102a057868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b61044e806102bc5f395ff3fe608060405260043610610041575f3560e01c80632986c0e51461026a5780634a79d50c14610292578063879f9c96146102b3578063a035b1fe146102dc575f80fd5b366102665760025460ff161561009e5760405162461bcd60e51b815260206004820181905260248201527f5468697320616c62756d20697320616c7265616479207075726368617365642160448201526064015b60405180910390fd5b345f54146100ee5760405162461bcd60e51b815260206004820152601d60248201527f576520616363657074206f6e6c792066756c6c207061796d656e7473210000006044820152606401610095565b60045460035460405160248101919091525f9173ffffffffffffffffffffffffffffffffffffffff1690349060440160408051601f198184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f800fb83f0000000000000000000000000000000000000000000000000000000017905251610180919061037c565b5f6040518083038185875af1925050503d805f81146101ba576040519150601f19603f3d011682016040523d82523d5f602084013e6101bf565b606091505b50509050806102365760405162461bcd60e51b815260206004820152602d60248201527f536f7272792c20776520636f756c64206e6f742070726f6365737320796f757260448201527f207472616e73616374696f6e2e000000000000000000000000000000000000006064820152608401610095565b600280547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155005b5f80fd5b348015610275575f80fd5b5061027f60035481565b6040519081526020015b60405180910390f35b34801561029d575f80fd5b506102a66102f0565b6040516102899190610392565b3480156102be575f80fd5b506002546102cc9060ff1681565b6040519015158152602001610289565b3480156102e7575f80fd5b5061027f5f5481565b600180546102fd906103c7565b80601f0160208091040260200160405190810160405280929190818152602001828054610329906103c7565b80156103745780601f1061034b57610100808354040283529160200191610374565b820191905f5260205f20905b81548152906001019060200180831161035757829003601f168201915b505050505081565b5f82518060208501845e5f920191825250919050565b602081525f82518060208401528060208501604085015e5f604082850101526040601f19601f83011684010191505092915050565b600181811c908216806103db57607f821691505b602082108103610412577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5091905056fea2646970667358221220622577ec64ff553c702948322002582b6767fde6c1800207a06038921fad931764736f6c634300081a0033";

type AlbumConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlbumConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Album__factory extends ContractFactory {
  constructor(...args: AlbumConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _price: BigNumberish,
    _title: string,
    _index: BigNumberish,
    _tracker: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _price,
      _title,
      _index,
      _tracker,
      overrides || {}
    );
  }
  override deploy(
    _price: BigNumberish,
    _title: string,
    _index: BigNumberish,
    _tracker: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _price,
      _title,
      _index,
      _tracker,
      overrides || {}
    ) as Promise<
      Album & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Album__factory {
    return super.connect(runner) as Album__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlbumInterface {
    return new Interface(_abi) as AlbumInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Album {
    return new Contract(address, _abi, runner) as unknown as Album;
  }
}
