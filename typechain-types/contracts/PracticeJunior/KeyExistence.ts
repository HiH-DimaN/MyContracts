/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface KeyExistenceInterface extends Interface {
  getFunction(
    nameOrSignature: "addBalance" | "balances" | "exists" | "keyExists"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBalance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "exists", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "keyExists",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "addBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keyExists", data: BytesLike): Result;
}

export interface KeyExistence extends BaseContract {
  connect(runner?: ContractRunner | null): KeyExistence;
  waitForDeployment(): Promise<this>;

  interface: KeyExistenceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addBalance: TypedContractMethod<
    [_address: AddressLike, _balance: BigNumberish],
    [void],
    "nonpayable"
  >;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  exists: TypedContractMethod<[_address: AddressLike], [boolean], "view">;

  keyExists: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addBalance"
  ): TypedContractMethod<
    [_address: AddressLike, _balance: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "exists"
  ): TypedContractMethod<[_address: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "keyExists"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  filters: {};
}