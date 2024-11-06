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

export interface MyContractInterface extends Interface {
  getFunction(
    nameOrSignature: "guestList" | "listOfFriends" | "newFriends"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "guestList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "listOfFriends",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "newFriends",
    values: [string, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "guestList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listOfFriends",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newFriends", data: BytesLike): Result;
}

export interface MyContract extends BaseContract {
  connect(runner?: ContractRunner | null): MyContract;
  waitForDeployment(): Promise<this>;

  interface: MyContractInterface;

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

  guestList: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, boolean] & { name: string; invited: boolean }],
    "view"
  >;

  listOfFriends: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, boolean] & { name: string; invited: boolean }],
    "view"
  >;

  newFriends: TypedContractMethod<
    [_name: string, _invited: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "guestList"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, boolean] & { name: string; invited: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "listOfFriends"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, boolean] & { name: string; invited: boolean }],
    "view"
  >;
  getFunction(
    nameOrSignature: "newFriends"
  ): TypedContractMethod<
    [_name: string, _invited: boolean],
    [void],
    "nonpayable"
  >;

  filters: {};
}
