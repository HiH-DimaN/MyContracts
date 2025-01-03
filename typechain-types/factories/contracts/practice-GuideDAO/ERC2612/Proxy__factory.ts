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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Proxy,
  ProxyInterface,
} from "../../../../contracts/practice-GuideDAO/ERC2612/Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract MyToken",
        name: "mtk",
        type: "address",
      },
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
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "doSend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600e575f80fd5b506101d28061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063db76922b1461002d575b5f80fd5b61004061003b366004610119565b610042565b005b6040517fd505accf00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301528781166024830152604482018790526064820186905260ff8516608483015260a4820184905260c4820183905289169063d505accf9060e4015f604051808303815f87803b1580156100d5575f80fd5b505af11580156100e7573d5f803e3d5ffd5b505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610116575f80fd5b50565b5f805f805f805f80610100898b031215610131575f80fd5b883561013c816100f5565b9750602089013561014c816100f5565b9650604089013561015c816100f5565b9550606089013594506080890135935060a089013560ff8116811461017f575f80fd5b979a969950949793969295929450505060c08201359160e001359056fea2646970667358221220eae2bc5b40345d99cbc68fd96691b798478145df89cb0a602eac8501caaf9ef964736f6c634300081a0033";

type ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Proxy__factory extends ContractFactory {
  constructor(...args: ProxyConstructorParams) {
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
      Proxy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Proxy__factory {
    return super.connect(runner) as Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyInterface {
    return new Interface(_abi) as ProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Proxy {
    return new Contract(address, _abi, runner) as unknown as Proxy;
  }
}
