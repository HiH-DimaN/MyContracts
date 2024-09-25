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
  MyToken,
  MyTokenInterface,
} from "../../../contracts/PracticeModule2/MyToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
  "0x60806040523480156200001157600080fd5b50336040518060400160405280600881526020016726bc902a37b5b2b760c11b8152506040518060400160405280600381526020016213565560ea1b815250816003908162000061919062000333565b50600462000070828262000333565b5050506001600160a01b038116620000a357604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b620000ae81620000cb565b50620000c53369d3c21bcecceda10000006200011d565b62000427565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001495760405163ec442f0560e01b8152600060048201526024016200009a565b62000157600083836200015b565b5050565b6001600160a01b0383166200018a5780600260008282546200017e9190620003ff565b90915550620001fe9050565b6001600160a01b03831660009081526020819052604090205481811015620001df5760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016200009a565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166200021c576002805482900390556200023b565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200028191815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620002b957607f821691505b602082108103620002da57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200032e57600081815260208120601f850160051c81016020861015620003095750805b601f850160051c820191505b818110156200032a5782815560010162000315565b5050505b505050565b81516001600160401b038111156200034f576200034f6200028e565b6200036781620003608454620002a4565b84620002e0565b602080601f8311600181146200039f5760008415620003865750858301515b600019600386901b1c1916600185901b1785556200032a565b600085815260208120601f198616915b82811015620003d057888601518255948401946001909101908401620003af565b5085821015620003ef5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200042157634e487b7160e01b600052601160045260246000fd5b92915050565b6109b880620004376000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063715018a611610081578063a9059cbb1161005b578063a9059cbb146101a4578063dd62ed3e146101b7578063f2fde38b146101f057600080fd5b8063715018a6146101775780638da5cb5b1461018157806395d89b411461019c57600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f57806370a082311461014e57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610203565b6040516100ee91906107b2565b60405180910390f35b61010a61010536600461083a565b610295565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a366004610864565b6102af565b604051601281526020016100ee565b61011e61015c3660046108a0565b6001600160a01b031660009081526020819052604090205490565b61017f6102d3565b005b6005546040516001600160a01b0390911681526020016100ee565b6100e16102e7565b61010a6101b236600461083a565b6102f6565b61011e6101c53660046108c2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b61017f6101fe3660046108a0565b610304565b606060038054610212906108f5565b80601f016020809104026020016040519081016040528092919081815260200182805461023e906108f5565b801561028b5780601f106102605761010080835404028352916020019161028b565b820191906000526020600020905b81548152906001019060200180831161026e57829003601f168201915b5050505050905090565b6000336102a3818585610360565b60019150505b92915050565b6000336102bd858285610372565b6102c8858585610427565b506001949350505050565b6102db6104b8565b6102e560006104fe565b565b606060048054610212906108f5565b6000336102a3818585610427565b61030c6104b8565b6001600160a01b038116610354576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024015b60405180910390fd5b61035d816104fe565b50565b61036d8383836001610568565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146104215781811015610412576040517ffb8f41b20000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602481018290526044810183905260640161034b565b61042184848484036000610568565b50505050565b6001600160a01b03831661046a576040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526000600482015260240161034b565b6001600160a01b0382166104ad576040517fec442f050000000000000000000000000000000000000000000000000000000081526000600482015260240161034b565b61036d83838361066f565b6005546001600160a01b031633146102e5576040517f118cdaa700000000000000000000000000000000000000000000000000000000815233600482015260240161034b565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0384166105ab576040517fe602df050000000000000000000000000000000000000000000000000000000081526000600482015260240161034b565b6001600160a01b0383166105ee576040517f94280d620000000000000000000000000000000000000000000000000000000081526000600482015260240161034b565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561042157826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161066191815260200190565b60405180910390a350505050565b6001600160a01b03831661069a57806002600082825461068f9190610948565b909155506107259050565b6001600160a01b03831660009081526020819052604090205481811015610706576040517fe450d38c0000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602481018290526044810183905260640161034b565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661074157600280548290039055610760565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107a591815260200190565b60405180910390a3505050565b600060208083528351808285015260005b818110156107df578581018301518582016040015282016107c3565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b80356001600160a01b038116811461083557600080fd5b919050565b6000806040838503121561084d57600080fd5b6108568361081e565b946020939093013593505050565b60008060006060848603121561087957600080fd5b6108828461081e565b92506108906020850161081e565b9150604084013590509250925092565b6000602082840312156108b257600080fd5b6108bb8261081e565b9392505050565b600080604083850312156108d557600080fd5b6108de8361081e565b91506108ec6020840161081e565b90509250929050565b600181811c9082168061090957607f821691505b602082108103610942577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b808201808211156102a9577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212206f87cf72be2fb036aa99c97fd7d2355b44e46c54bc154c8f8db401341c6a0c7364736f6c63430008140033";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
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
      MyToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyToken__factory {
    return super.connect(runner) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new Interface(_abi) as MyTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyToken {
    return new Contract(address, _abi, runner) as unknown as MyToken;
  }
}
