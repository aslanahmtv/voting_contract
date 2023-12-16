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

export interface PollManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createPoll"
      | "owner"
      | "pollProposals"
      | "polls"
      | "renounceOwnership"
      | "transferOwnership"
      | "vote"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "OwnershipTransferred" | "PollCreated" | "Voted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "createPoll",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pollProposals",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "polls", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "createPoll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pollProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "polls", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PollCreatedEvent {
  export type InputTuple = [result: BigNumberish];
  export type OutputTuple = [result: bigint];
  export interface OutputObject {
    result: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace VotedEvent {
  export type InputTuple = [result: BigNumberish];
  export type OutputTuple = [result: bigint];
  export interface OutputObject {
    result: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PollManager extends BaseContract {
  connect(runner?: ContractRunner | null): PollManager;
  waitForDeployment(): Promise<this>;

  interface: PollManagerInterface;

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

  createPoll: TypedContractMethod<
    [name: BytesLike, proposalNames: BytesLike[]],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pollProposals: TypedContractMethod<
    [arg0: BytesLike, arg1: BytesLike],
    [[string, bigint] & { name: string; voteCount: bigint }],
    "view"
  >;

  polls: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { name: string; proposalCount: bigint }],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  vote: TypedContractMethod<
    [pollName: BytesLike, proposalName: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createPoll"
  ): TypedContractMethod<
    [name: BytesLike, proposalNames: BytesLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pollProposals"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BytesLike],
    [[string, bigint] & { name: string; voteCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "polls"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, bigint] & { name: string; proposalCount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vote"
  ): TypedContractMethod<
    [pollName: BytesLike, proposalName: BytesLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PollCreated"
  ): TypedContractEvent<
    PollCreatedEvent.InputTuple,
    PollCreatedEvent.OutputTuple,
    PollCreatedEvent.OutputObject
  >;
  getEvent(
    key: "Voted"
  ): TypedContractEvent<
    VotedEvent.InputTuple,
    VotedEvent.OutputTuple,
    VotedEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "PollCreated(uint8)": TypedContractEvent<
      PollCreatedEvent.InputTuple,
      PollCreatedEvent.OutputTuple,
      PollCreatedEvent.OutputObject
    >;
    PollCreated: TypedContractEvent<
      PollCreatedEvent.InputTuple,
      PollCreatedEvent.OutputTuple,
      PollCreatedEvent.OutputObject
    >;

    "Voted(uint8)": TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
    Voted: TypedContractEvent<
      VotedEvent.InputTuple,
      VotedEvent.OutputTuple,
      VotedEvent.OutputObject
    >;
  };
}