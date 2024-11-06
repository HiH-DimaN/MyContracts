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

export interface InheritedContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getText"
      | "getValue"
      | "setText"
      | "setValue"
      | "text"
      | "value"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getText", values?: undefined): string;
  encodeFunctionData(functionFragment: "getValue", values?: undefined): string;
  encodeFunctionData(functionFragment: "setText", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "text", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getText", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setText", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
}

export interface InheritedContract extends BaseContract {
  connect(runner?: ContractRunner | null): InheritedContract;
  waitForDeployment(): Promise<this>;

  interface: InheritedContractInterface;

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

  getText: TypedContractMethod<[], [string], "view">;

  getValue: TypedContractMethod<[], [bigint], "view">;

  setText: TypedContractMethod<[_newText: string], [void], "nonpayable">;

  setValue: TypedContractMethod<
    [_newValue: BigNumberish],
    [void],
    "nonpayable"
  >;

  text: TypedContractMethod<[], [string], "view">;

  value: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getText"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getValue"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setText"
  ): TypedContractMethod<[_newText: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setValue"
  ): TypedContractMethod<[_newValue: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "text"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "value"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
