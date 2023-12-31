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
import type { NonPayableOverrides } from "../common";
import type { PollManager, PollManagerInterface } from "../PollManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    name: "PollCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    name: "voted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "proposalNames",
        type: "bytes32[]",
      },
    ],
    name: "createPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "pollProposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "voteCount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "polls",
    outputs: [
      {
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "proposalCount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "pollName",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "proposalName",
        type: "bytes32",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610730806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063ac2f007414610051578063dcaf84d914610082578063eeaaf19d1461009e578063f66a1e70146100ba575b600080fd5b61006b60048036038101906100669190610355565b6100eb565b6040516100799291906103aa565b60405180910390f35b61009c60048036038101906100979190610558565b61011f565b005b6100b860048036038101906100b391906105b4565b610261565b005b6100d460048036038101906100cf91906105b4565b6102da565b6040516100e29291906103aa565b60405180910390f35b600081815481106100fb57600080fd5b90600052602060002090600202016000915090508060000154908060010154905082565b60008080549050905060006040518060400160405280858152602001845181525090806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010155505060005b82518110156102235760405180604001604052808483815181106101a9576101a86105f4565b5b6020026020010151815260200160008152506001600086815260200190815260200160002060008584815181106101e3576101e26105f4565b5b602002602001015181526020019081526020016000206000820151816000015560208201518160010155905050808061021b90610652565b915050610182565b507fab0309b6731a34e8750174d3c2c9591a34a2bf0c1425a30b34122be08d050739600160405161025491906106df565b60405180910390a1505050565b600160008381526020019081526020016000206000828152602001908152602001600020600101600081548092919061029990610652565b91905055507f8fbb38ff86a5b319c33b22609be0afce04335d5db18c6bd100767e251d4028cc60016040516102ce91906106df565b60405180910390a15050565b6001602052816000526040600020602052806000526040600020600091509150508060000154908060010154905082565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6103328161031f565b811461033d57600080fd5b50565b60008135905061034f81610329565b92915050565b60006020828403121561036b5761036a610315565b5b600061037984828501610340565b91505092915050565b6000819050919050565b61039581610382565b82525050565b6103a48161031f565b82525050565b60006040820190506103bf600083018561038c565b6103cc602083018461039b565b9392505050565b6103dc81610382565b81146103e757600080fd5b50565b6000813590506103f9816103d3565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61044d82610404565b810181811067ffffffffffffffff8211171561046c5761046b610415565b5b80604052505050565b600061047f61030b565b905061048b8282610444565b919050565b600067ffffffffffffffff8211156104ab576104aa610415565b5b602082029050602081019050919050565b600080fd5b60006104d46104cf84610490565b610475565b905080838252602082019050602084028301858111156104f7576104f66104bc565b5b835b81811015610520578061050c88826103ea565b8452602084019350506020810190506104f9565b5050509392505050565b600082601f83011261053f5761053e6103ff565b5b813561054f8482602086016104c1565b91505092915050565b6000806040838503121561056f5761056e610315565b5b600061057d858286016103ea565b925050602083013567ffffffffffffffff81111561059e5761059d61031a565b5b6105aa8582860161052a565b9150509250929050565b600080604083850312156105cb576105ca610315565b5b60006105d9858286016103ea565b92505060206105ea858286016103ea565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061065d8261031f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361068f5761068e610623565b5b600182019050919050565b6000819050919050565b6000819050919050565b60006106c96106c46106bf8461069a565b6106a4565b61031f565b9050919050565b6106d9816106ae565b82525050565b60006020820190506106f460008301846106d0565b9291505056fea2646970667358221220e36ec84ad1540ab188ef6bc968444e17a239e96a1213258c3b07a3f3fa4a243d64736f6c63430008130033";

type PollManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PollManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PollManager__factory extends ContractFactory {
  constructor(...args: PollManagerConstructorParams) {
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
      PollManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PollManager__factory {
    return super.connect(runner) as PollManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PollManagerInterface {
    return new Interface(_abi) as PollManagerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PollManager {
    return new Contract(address, _abi, runner) as unknown as PollManager;
  }
}
