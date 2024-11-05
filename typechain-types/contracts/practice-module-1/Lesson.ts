/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface LessonInterface extends Interface {
  getFunction(nameOrSignature: "myAddr" | "smeil" | "text"): FunctionFragment;

  encodeFunctionData(functionFragment: "myAddr", values?: undefined): string;
  encodeFunctionData(functionFragment: "smeil", values?: undefined): string;
  encodeFunctionData(functionFragment: "text", values?: undefined): string;

  decodeFunctionResult(functionFragment: "myAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "smeil", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
}

export interface Lesson extends BaseContract {
  connect(runner?: ContractRunner | null): Lesson;
  waitForDeployment(): Promise<this>;

  interface: LessonInterface;

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

  myAddr: TypedContractMethod<[], [string], "view">;

  smeil: TypedContractMethod<[], [string], "view">;

  text: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "myAddr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "smeil"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "text"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}