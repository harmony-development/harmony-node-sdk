// package: protocol.profile.v1
// file: protocol/profile/v1/profile.proto

import * as protocol_profile_v1_profile_pb from "../../../protocol/profile/v1/profile_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ProfileServiceGetUser = {
  readonly methodName: string;
  readonly service: typeof ProfileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_profile_v1_profile_pb.GetUserRequest;
  readonly responseType: typeof protocol_profile_v1_profile_pb.GetUserResponse;
};

type ProfileServiceGetUserMetadata = {
  readonly methodName: string;
  readonly service: typeof ProfileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_profile_v1_profile_pb.GetUserMetadataRequest;
  readonly responseType: typeof protocol_profile_v1_profile_pb.GetUserMetadataResponse;
};

type ProfileServiceUsernameUpdate = {
  readonly methodName: string;
  readonly service: typeof ProfileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_profile_v1_profile_pb.UsernameUpdateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

type ProfileServiceStatusUpdate = {
  readonly methodName: string;
  readonly service: typeof ProfileService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof protocol_profile_v1_profile_pb.StatusUpdateRequest;
  readonly responseType: typeof google_protobuf_empty_pb.Empty;
};

export class ProfileService {
  static readonly serviceName: string;
  static readonly GetUser: ProfileServiceGetUser;
  static readonly GetUserMetadata: ProfileServiceGetUserMetadata;
  static readonly UsernameUpdate: ProfileServiceUsernameUpdate;
  static readonly StatusUpdate: ProfileServiceStatusUpdate;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ProfileServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getUser(
    requestMessage: protocol_profile_v1_profile_pb.GetUserRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_profile_v1_profile_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUser(
    requestMessage: protocol_profile_v1_profile_pb.GetUserRequest,
    callback: (error: ServiceError|null, responseMessage: protocol_profile_v1_profile_pb.GetUserResponse|null) => void
  ): UnaryResponse;
  getUserMetadata(
    requestMessage: protocol_profile_v1_profile_pb.GetUserMetadataRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: protocol_profile_v1_profile_pb.GetUserMetadataResponse|null) => void
  ): UnaryResponse;
  getUserMetadata(
    requestMessage: protocol_profile_v1_profile_pb.GetUserMetadataRequest,
    callback: (error: ServiceError|null, responseMessage: protocol_profile_v1_profile_pb.GetUserMetadataResponse|null) => void
  ): UnaryResponse;
  usernameUpdate(
    requestMessage: protocol_profile_v1_profile_pb.UsernameUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  usernameUpdate(
    requestMessage: protocol_profile_v1_profile_pb.UsernameUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  statusUpdate(
    requestMessage: protocol_profile_v1_profile_pb.StatusUpdateRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
  statusUpdate(
    requestMessage: protocol_profile_v1_profile_pb.StatusUpdateRequest,
    callback: (error: ServiceError|null, responseMessage: google_protobuf_empty_pb.Empty|null) => void
  ): UnaryResponse;
}

