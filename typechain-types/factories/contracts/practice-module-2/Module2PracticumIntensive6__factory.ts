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
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Module2PracticumIntensive6,
  Module2PracticumIntensive6Interface,
} from "../../../contracts/practice-module-2/Module2PracticumIntensive6";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_immutableValue",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MY_CONSTANT",
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
    name: "MY_IMMUTABLE",
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
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "addToArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_key",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_value",
        type: "bool",
      },
    ],
    name: "addToNestedMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "addToUserInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "addUserToArray",
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
    name: "balances",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
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
    name: "dynamicArray",
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
        name: "_user",
        type: "address",
      },
    ],
    name: "logEtherReceived",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "myBool",
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
    name: "myUint",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nestedMapping",
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
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "removeFromArray",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_key",
        type: "uint256",
      },
    ],
    name: "removeFromNestedMapping",
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
    name: "userInfos",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
        ],
        internalType: "struct Module2PracticumIntensive6.NestedStruct",
        name: "nestedData",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    name: "usersArray",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "data",
            type: "string",
          },
        ],
        internalType: "struct Module2PracticumIntensive6.NestedStruct",
        name: "nestedData",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052348015600e575f80fd5b50604051610d79380380610d79833981016040819052602b916044565b600180546001600160a01b03191633179055608052605a565b5f602082840312156053575f80fd5b5051919050565b608051610d076100725f395f61028b0152610d075ff3fe608060405260043610610123575f3560e01c80635d088a4d116100a1578063a6f9dae111610071578063d802904611610057578063d8029046146103e3578063eb56ea901461041c578063f8a874bf1461043b575f80fd5b8063a6f9dae114610376578063d15ec85114610395575f80fd5b80635d088a4d146102cc5780636deecdbe146102df5780638da5cb5b146103205780639a9bdca714610357575f80fd5b80630f60d11b116100f65780632fae35c0116100dc5780632fae35c01461024d5780633bc72e5e1461027a57806343b0215f146102ad575f80fd5b80630f60d11b1461020357806327e235e314610222575f80fd5b806301bd2e6c1461012757806306540f7e146101775780630d4a72591461019e5780630f130e24146101bd575b5f80fd5b348015610132575f80fd5b506101756101413660046108f1565b6001600160a01b03929092165f90815260046020908152604080832093835292905220805460ff1916911515919091179055565b005b348015610182575f80fd5b5061018b5f5481565b6040519081526020015b60405180910390f35b3480156101a9575f80fd5b506101756101b83660046109d2565b61044f565b3480156101c8575f80fd5b506101756101d7366004610a1e565b6001600160a01b039091165f90815260046020908152604080832093835292905220805460ff19169055565b34801561020e575f80fd5b5061017561021d366004610a46565b61051f565b34801561022d575f80fd5b5061018b61023c366004610aa3565b60026020525f908152604090205481565b348015610258575f80fd5b5061026c610267366004610ac3565b610579565b604051610195929190610ada565b348015610285575f80fd5b5061018b7f000000000000000000000000000000000000000000000000000000000000000081565b3480156102b8575f80fd5b5061026c6102c7366004610aa3565b61064b565b6101756102da366004610aa3565b610689565b3480156102ea575f80fd5b506001546103109074010000000000000000000000000000000000000000900460ff1681565b6040519015158152602001610195565b34801561032b575f80fd5b5060015461033f906001600160a01b031681565b6040516001600160a01b039091168152602001610195565b348015610362575f80fd5b5061018b610371366004610ac3565b61070c565b348015610381575f80fd5b50610175610390366004610aa3565b61072b565b3480156103a0575f80fd5b506101756103af366004610ac3565b600380546001810182555f919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0155565b3480156103ee575f80fd5b506103106103fd366004610a1e565b600460209081525f928352604080842090915290825290205460ff1681565b348015610427575f80fd5b50610175610436366004610ac3565b610817565b348015610446575f80fd5b5061018b606481565b60408051808201825284815281518083019092528382526020808301849052808201928352600680546001810182555f9190915282517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f6003909202918201908155935180517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4083019081559281015193948594909391927ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4101906105149082610bae565b505050505050505050565b6001600160a01b0384165f8181526005602081815260408084208881558151808301909252878252818301878152959094529190528051600183019081559251909291600201906105709082610bae565b50505050505050565b60068181548110610588575f80fd5b905f5260205f2090600302015f91509050805f015490806001016040518060400160405290815f82015481526020016001820180546105c690610b2a565b80601f01602080910402602001604051908101604052809291908181526020018280546105f290610b2a565b801561063d5780601f106106145761010080835404028352916020019161063d565b820191905f5260205f20905b81548152906001019060200180831161062057829003601f168201915b505050505081525050905082565b6005602052805f5260405f205f91509050805f015490806001016040518060400160405290815f82015481526020016001820180546105c690610b2a565b5f34116106dd5760405162461bcd60e51b815260206004820152600d60248201527f4e6f2065746865722073656e740000000000000000000000000000000000000060448201526064015b60405180910390fd5b6001600160a01b0381165f9081526002602052604081208054349290610704908490610c7d565b909155505050565b6003818154811061071b575f80fd5b5f91825260209091200154905081565b6001546001600160a01b031633146107855760405162461bcd60e51b815260206004820152601660248201527f4e6f742074686520636f6e7472616374206f776e65720000000000000000000060448201526064016106d4565b806001600160a01b0381166107dc5760405162461bcd60e51b815260206004820152600f60248201527f41646472657373206973207a65726f000000000000000000000000000000000060448201526064016106d4565b50600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60035481106108685760405162461bcd60e51b815260206004820152601360248201527f496e646578206f7574206f6620626f756e64730000000000000000000000000060448201526064016106d4565b6003805461087890600190610c96565b8154811061088857610888610ca9565b905f5260205f200154600382815481106108a4576108a4610ca9565b5f9182526020909120015560038054806108c0576108c0610cbd565b600190038181905f5260205f20015f9055905550565b80356001600160a01b03811681146108ec575f80fd5b919050565b5f805f60608486031215610903575f80fd5b61090c846108d6565b92506020840135915060408401358015158114610927575f80fd5b809150509250925092565b634e487b7160e01b5f52604160045260245ffd5b5f82601f830112610955575f80fd5b813567ffffffffffffffff81111561096f5761096f610932565b604051601f19603f601f19601f8501160116810181811067ffffffffffffffff8211171561099f5761099f610932565b6040528181528382016020018510156109b6575f80fd5b816020850160208301375f918101602001919091529392505050565b5f805f606084860312156109e4575f80fd5b8335925060208401359150604084013567ffffffffffffffff811115610a08575f80fd5b610a1486828701610946565b9150509250925092565b5f8060408385031215610a2f575f80fd5b610a38836108d6565b946020939093013593505050565b5f805f8060808587031215610a59575f80fd5b610a62856108d6565b93506020850135925060408501359150606085013567ffffffffffffffff811115610a8b575f80fd5b610a9787828801610946565b91505092959194509250565b5f60208284031215610ab3575f80fd5b610abc826108d6565b9392505050565b5f60208284031215610ad3575f80fd5b5035919050565b82815260406020820152815160408201525f6020830151604060608401528051806080850152806020830160a086015e5f60a0828601015260a0601f19601f830116850101925050509392505050565b600181811c90821680610b3e57607f821691505b602082108103610b5c57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f821115610ba957805f5260205f20601f840160051c81016020851015610b875750805b601f840160051c820191505b81811015610ba6575f8155600101610b93565b50505b505050565b815167ffffffffffffffff811115610bc857610bc8610932565b610bdc81610bd68454610b2a565b84610b62565b6020601f821160018114610c0e575f8315610bf75750848201515b5f19600385901b1c1916600184901b178455610ba6565b5f84815260208120601f198516915b82811015610c3d5787850151825560209485019460019092019101610c1d565b5084821015610c5a57868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b5f52601160045260245ffd5b80820180821115610c9057610c90610c69565b92915050565b81810381811115610c9057610c90610c69565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52603160045260245ffdfea2646970667358221220a93687cbdf4807d783d1416e3586735190bcbdd07a911017b85135233dfa023f64736f6c634300081a0033";

type Module2PracticumIntensive6ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Module2PracticumIntensive6ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Module2PracticumIntensive6__factory extends ContractFactory {
  constructor(...args: Module2PracticumIntensive6ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _immutableValue: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_immutableValue, overrides || {});
  }
  override deploy(
    _immutableValue: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_immutableValue, overrides || {}) as Promise<
      Module2PracticumIntensive6 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): Module2PracticumIntensive6__factory {
    return super.connect(runner) as Module2PracticumIntensive6__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Module2PracticumIntensive6Interface {
    return new Interface(_abi) as Module2PracticumIntensive6Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Module2PracticumIntensive6 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as Module2PracticumIntensive6;
  }
}
