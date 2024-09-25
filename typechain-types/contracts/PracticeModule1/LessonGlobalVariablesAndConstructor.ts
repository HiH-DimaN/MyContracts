/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface LessonGlobalVariablesAndConstructorInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "THREE_DAYS"
      | "TWO_WEEKS"
      | "changeOwner"
      | "checkAndUpdateTimestamp"
      | "owner"
      | "timestamp"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "THREE_DAYS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TWO_WEEKS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "checkAndUpdateTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "timestamp", values?: undefined): string;

  decodeFunctionResult(functionFragment: "THREE_DAYS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TWO_WEEKS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAndUpdateTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timestamp", data: BytesLike): Result;
}

export interface LessonGlobalVariablesAndConstructor extends BaseContract {
  connect(runner?: ContractRunner | null): LessonGlobalVariablesAndConstructor;
  waitForDeployment(): Promise<this>;

  interface: LessonGlobalVariablesAndConstructorInterface;

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

  THREE_DAYS: TypedContractMethod<[], [bigint], "view">;

  TWO_WEEKS: TypedContractMethod<[], [bigint], "view">;

  changeOwner: TypedContractMethod<
    [_newAddr: AddressLike],
    [void],
    "nonpayable"
  >;

  checkAndUpdateTimestamp: TypedContractMethod<[], [void], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  timestamp: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "THREE_DAYS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "TWO_WEEKS"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "changeOwner"
  ): TypedContractMethod<[_newAddr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkAndUpdateTimestamp"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "timestamp"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}