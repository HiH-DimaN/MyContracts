/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface FeedbackContractInterface extends Interface {
  getFunction(nameOrSignature: "perfomAction"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "FeedbackGenerated"): EventFragment;

  encodeFunctionData(
    functionFragment: "perfomAction",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "perfomAction",
    data: BytesLike
  ): Result;
}

export namespace FeedbackGeneratedEvent {
  export type InputTuple = [
    user: AddressLike,
    message: string,
    success: boolean
  ];
  export type OutputTuple = [user: string, message: string, success: boolean];
  export interface OutputObject {
    user: string;
    message: string;
    success: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FeedbackContract extends BaseContract {
  connect(runner?: ContractRunner | null): FeedbackContract;
  waitForDeployment(): Promise<this>;

  interface: FeedbackContractInterface;

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

  perfomAction: TypedContractMethod<[_input: string], [boolean], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "perfomAction"
  ): TypedContractMethod<[_input: string], [boolean], "nonpayable">;

  getEvent(
    key: "FeedbackGenerated"
  ): TypedContractEvent<
    FeedbackGeneratedEvent.InputTuple,
    FeedbackGeneratedEvent.OutputTuple,
    FeedbackGeneratedEvent.OutputObject
  >;

  filters: {
    "FeedbackGenerated(address,string,bool)": TypedContractEvent<
      FeedbackGeneratedEvent.InputTuple,
      FeedbackGeneratedEvent.OutputTuple,
      FeedbackGeneratedEvent.OutputObject
    >;
    FeedbackGenerated: TypedContractEvent<
      FeedbackGeneratedEvent.InputTuple,
      FeedbackGeneratedEvent.OutputTuple,
      FeedbackGeneratedEvent.OutputObject
    >;
  };
}
