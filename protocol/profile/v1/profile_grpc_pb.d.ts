// GENERATED CODE -- DO NOT EDIT!

// package: protocol.profile.v1
// file: profile/v1/profile.proto

import * as profile_v1_profile_pb from "../../profile/v1/profile_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUser: grpc.MethodDefinition<profile_v1_profile_pb.GetUserRequest, profile_v1_profile_pb.GetUserResponse>;
  getUserMetadata: grpc.MethodDefinition<profile_v1_profile_pb.GetUserMetadataRequest, profile_v1_profile_pb.GetUserMetadataResponse>;
  usernameUpdate: grpc.MethodDefinition<profile_v1_profile_pb.UsernameUpdateRequest, google_protobuf_empty_pb.Empty>;
  statusUpdate: grpc.MethodDefinition<profile_v1_profile_pb.StatusUpdateRequest, google_protobuf_empty_pb.Empty>;
}

export const ProfileServiceService: IProfileServiceService;

export class ProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUser(argument: profile_v1_profile_pb.GetUserRequest, callback: grpc.requestCallback<profile_v1_profile_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: profile_v1_profile_pb.GetUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<profile_v1_profile_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: profile_v1_profile_pb.GetUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<profile_v1_profile_pb.GetUserResponse>): grpc.ClientUnaryCall;
  getUserMetadata(argument: profile_v1_profile_pb.GetUserMetadataRequest, callback: grpc.requestCallback<profile_v1_profile_pb.GetUserMetadataResponse>): grpc.ClientUnaryCall;
  getUserMetadata(argument: profile_v1_profile_pb.GetUserMetadataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<profile_v1_profile_pb.GetUserMetadataResponse>): grpc.ClientUnaryCall;
  getUserMetadata(argument: profile_v1_profile_pb.GetUserMetadataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<profile_v1_profile_pb.GetUserMetadataResponse>): grpc.ClientUnaryCall;
  usernameUpdate(argument: profile_v1_profile_pb.UsernameUpdateRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  usernameUpdate(argument: profile_v1_profile_pb.UsernameUpdateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  usernameUpdate(argument: profile_v1_profile_pb.UsernameUpdateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  statusUpdate(argument: profile_v1_profile_pb.StatusUpdateRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  statusUpdate(argument: profile_v1_profile_pb.StatusUpdateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  statusUpdate(argument: profile_v1_profile_pb.StatusUpdateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
