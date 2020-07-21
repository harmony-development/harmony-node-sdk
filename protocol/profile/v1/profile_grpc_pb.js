// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var profile_v1_profile_pb = require('../../profile/v1/profile_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_profile_v1_GetUserMetadataRequest(arg) {
  if (!(arg instanceof profile_v1_profile_pb.GetUserMetadataRequest)) {
    throw new Error('Expected argument of type protocol.profile.v1.GetUserMetadataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_profile_v1_GetUserMetadataRequest(buffer_arg) {
  return profile_v1_profile_pb.GetUserMetadataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_profile_v1_GetUserMetadataResponse(arg) {
  if (!(arg instanceof profile_v1_profile_pb.GetUserMetadataResponse)) {
    throw new Error('Expected argument of type protocol.profile.v1.GetUserMetadataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_profile_v1_GetUserMetadataResponse(buffer_arg) {
  return profile_v1_profile_pb.GetUserMetadataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_profile_v1_GetUserRequest(arg) {
  if (!(arg instanceof profile_v1_profile_pb.GetUserRequest)) {
    throw new Error('Expected argument of type protocol.profile.v1.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_profile_v1_GetUserRequest(buffer_arg) {
  return profile_v1_profile_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_profile_v1_GetUserResponse(arg) {
  if (!(arg instanceof profile_v1_profile_pb.GetUserResponse)) {
    throw new Error('Expected argument of type protocol.profile.v1.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_profile_v1_GetUserResponse(buffer_arg) {
  return profile_v1_profile_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_profile_v1_StatusUpdateRequest(arg) {
  if (!(arg instanceof profile_v1_profile_pb.StatusUpdateRequest)) {
    throw new Error('Expected argument of type protocol.profile.v1.StatusUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_profile_v1_StatusUpdateRequest(buffer_arg) {
  return profile_v1_profile_pb.StatusUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_profile_v1_UsernameUpdateRequest(arg) {
  if (!(arg instanceof profile_v1_profile_pb.UsernameUpdateRequest)) {
    throw new Error('Expected argument of type protocol.profile.v1.UsernameUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_profile_v1_UsernameUpdateRequest(buffer_arg) {
  return profile_v1_profile_pb.UsernameUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProfileServiceService = exports.ProfileServiceService = {
  getUser: {
    path: '/protocol.profile.v1.ProfileService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.GetUserRequest,
    responseType: profile_v1_profile_pb.GetUserResponse,
    requestSerialize: serialize_protocol_profile_v1_GetUserRequest,
    requestDeserialize: deserialize_protocol_profile_v1_GetUserRequest,
    responseSerialize: serialize_protocol_profile_v1_GetUserResponse,
    responseDeserialize: deserialize_protocol_profile_v1_GetUserResponse,
  },
  getUserMetadata: {
    path: '/protocol.profile.v1.ProfileService/GetUserMetadata',
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.GetUserMetadataRequest,
    responseType: profile_v1_profile_pb.GetUserMetadataResponse,
    requestSerialize: serialize_protocol_profile_v1_GetUserMetadataRequest,
    requestDeserialize: deserialize_protocol_profile_v1_GetUserMetadataRequest,
    responseSerialize: serialize_protocol_profile_v1_GetUserMetadataResponse,
    responseDeserialize: deserialize_protocol_profile_v1_GetUserMetadataResponse,
  },
  usernameUpdate: {
    path: '/protocol.profile.v1.ProfileService/UsernameUpdate',
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.UsernameUpdateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_profile_v1_UsernameUpdateRequest,
    requestDeserialize: deserialize_protocol_profile_v1_UsernameUpdateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  statusUpdate: {
    path: '/protocol.profile.v1.ProfileService/StatusUpdate',
    requestStream: false,
    responseStream: false,
    requestType: profile_v1_profile_pb.StatusUpdateRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_profile_v1_StatusUpdateRequest,
    requestDeserialize: deserialize_protocol_profile_v1_StatusUpdateRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ProfileServiceClient = grpc.makeGenericClientConstructor(ProfileServiceService);
