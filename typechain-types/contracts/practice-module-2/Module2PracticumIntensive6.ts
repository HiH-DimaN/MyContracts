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

export declare namespace Module2PracticumIntensive6 {
  export type NestedStructStruct = { id: BigNumberish; data: string };

  export type NestedStructStructOutput = [id: bigint, data: string] & {
    id: bigint;
    data: string;
  };
}

export interface Module2PracticumIntensive6Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "MY_CONSTANT"
      | "MY_IMMUTABLE"
      | "addToArray"
      | "addToNestedMapping"
      | "addToUserInfo"
      | "addUserToArray"
      | "balances"
      | "changeOwner"
      | "dynamicArray"
      | "logEtherReceived"
      | "myBool"
      | "myUint"
      | "nestedMapping"
      | "owner"
      | "removeFromArray"
      | "removeFromNestedMapping"
      | "userInfos"
      | "usersArray"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MY_CONSTANT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MY_IMMUTABLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addToArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addToNestedMapping",
    values: [AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "addToUserInfo",
    values: [AddressLike, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addUserToArray",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "dynamicArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "logEtherReceived",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "myBool", values?: undefined): string;
  encodeFunctionData(functionFragment: "myUint", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nestedMapping",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeFromArray",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromNestedMapping",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfos",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "usersArray",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MY_CONSTANT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MY_IMMUTABLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addToArray", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addToNestedMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addToUserInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUserToArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dynamicArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "logEtherReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "myBool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "myUint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nestedMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeFromArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromNestedMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userInfos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usersArray", data: BytesLike): Result;
}

export interface Module2PracticumIntensive6 extends BaseContract {
  connect(runner?: ContractRunner | null): Module2PracticumIntensive6;
  waitForDeployment(): Promise<this>;

  interface: Module2PracticumIntensive6Interface;

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

  MY_CONSTANT: TypedContractMethod<[], [bigint], "view">;

  MY_IMMUTABLE: TypedContractMethod<[], [bigint], "view">;

  addToArray: TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;

  addToNestedMapping: TypedContractMethod<
    [_addr: AddressLike, _key: BigNumberish, _value: boolean],
    [void],
    "nonpayable"
  >;

  addToUserInfo: TypedContractMethod<
    [
      _user: AddressLike,
      _balance: BigNumberish,
      _id: BigNumberish,
      _data: string
    ],
    [void],
    "nonpayable"
  >;

  addUserToArray: TypedContractMethod<
    [_balance: BigNumberish, _id: BigNumberish, _data: string],
    [void],
    "nonpayable"
  >;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  changeOwner: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  dynamicArray: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  logEtherReceived: TypedContractMethod<
    [_user: AddressLike],
    [void],
    "payable"
  >;

  myBool: TypedContractMethod<[], [boolean], "view">;

  myUint: TypedContractMethod<[], [bigint], "view">;

  nestedMapping: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  removeFromArray: TypedContractMethod<
    [index: BigNumberish],
    [void],
    "nonpayable"
  >;

  removeFromNestedMapping: TypedContractMethod<
    [_addr: AddressLike, _key: BigNumberish],
    [void],
    "nonpayable"
  >;

  userInfos: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, Module2PracticumIntensive6.NestedStructStructOutput] & {
        balance: bigint;
        nestedData: Module2PracticumIntensive6.NestedStructStructOutput;
      }
    ],
    "view"
  >;

  usersArray: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, Module2PracticumIntensive6.NestedStructStructOutput] & {
        balance: bigint;
        nestedData: Module2PracticumIntensive6.NestedStructStructOutput;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MY_CONSTANT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MY_IMMUTABLE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "addToArray"
  ): TypedContractMethod<[value: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addToNestedMapping"
  ): TypedContractMethod<
    [_addr: AddressLike, _key: BigNumberish, _value: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addToUserInfo"
  ): TypedContractMethod<
    [
      _user: AddressLike,
      _balance: BigNumberish,
      _id: BigNumberish,
      _data: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addUserToArray"
  ): TypedContractMethod<
    [_balance: BigNumberish, _id: BigNumberish, _data: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "changeOwner"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dynamicArray"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "logEtherReceived"
  ): TypedContractMethod<[_user: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "myBool"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "myUint"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nestedMapping"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeFromArray"
  ): TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeFromNestedMapping"
  ): TypedContractMethod<
    [_addr: AddressLike, _key: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "userInfos"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, Module2PracticumIntensive6.NestedStructStructOutput] & {
        balance: bigint;
        nestedData: Module2PracticumIntensive6.NestedStructStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "usersArray"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, Module2PracticumIntensive6.NestedStructStructOutput] & {
        balance: bigint;
        nestedData: Module2PracticumIntensive6.NestedStructStructOutput;
      }
    ],
    "view"
  >;

  filters: {};
}
