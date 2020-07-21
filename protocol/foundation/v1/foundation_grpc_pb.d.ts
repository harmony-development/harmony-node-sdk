// GENERATED CODE -- DO NOT EDIT!

// package: protocol.foundation.v1
// file: foundation/v1/foundation.proto

import * as foundation_v1_foundation_pb from "../../foundation/v1/foundation_pb";
import * as grpc from "grpc";

interface IFoundationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  federate: grpc.MethodDefinition<foundation_v1_foundation_pb.FederateRequest, foundation_v1_foundation_pb.FederateReply>;
  key: grpc.MethodDefinition<foundation_v1_foundation_pb.KeyRequest, foundation_v1_foundation_pb.KeyReply>;
  login: grpc.MethodDefinition<foundation_v1_foundation_pb.LoginRequest, foundation_v1_foundation_pb.Session>;
  register: grpc.MethodDefinition<foundation_v1_foundation_pb.RegisterRequest, foundation_v1_foundation_pb.Session>;
}

export const FoundationServiceService: IFoundationServiceService;

export class FoundationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  federate(argument: foundation_v1_foundation_pb.FederateRequest, callback: grpc.requestCallback<foundation_v1_foundation_pb.FederateReply>): grpc.ClientUnaryCall;
  federate(argument: foundation_v1_foundation_pb.FederateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.FederateReply>): grpc.ClientUnaryCall;
  federate(argument: foundation_v1_foundation_pb.FederateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.FederateReply>): grpc.ClientUnaryCall;
  key(argument: foundation_v1_foundation_pb.KeyRequest, callback: grpc.requestCallback<foundation_v1_foundation_pb.KeyReply>): grpc.ClientUnaryCall;
  key(argument: foundation_v1_foundation_pb.KeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.KeyReply>): grpc.ClientUnaryCall;
  key(argument: foundation_v1_foundation_pb.KeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.KeyReply>): grpc.ClientUnaryCall;
  login(argument: foundation_v1_foundation_pb.LoginRequest, callback: grpc.requestCallback<foundation_v1_foundation_pb.Session>): grpc.ClientUnaryCall;
  login(argument: foundation_v1_foundation_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.Session>): grpc.ClientUnaryCall;
  login(argument: foundation_v1_foundation_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.Session>): grpc.ClientUnaryCall;
  register(argument: foundation_v1_foundation_pb.RegisterRequest, callback: grpc.requestCallback<foundation_v1_foundation_pb.Session>): grpc.ClientUnaryCall;
  register(argument: foundation_v1_foundation_pb.RegisterRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.Session>): grpc.ClientUnaryCall;
  register(argument: foundation_v1_foundation_pb.RegisterRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<foundation_v1_foundation_pb.Session>): grpc.ClientUnaryCall;
}
