// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var foundation_v1_foundation_pb = require('../../foundation/v1/foundation_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_protocol_foundation_v1_FederateReply(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.FederateReply)) {
    throw new Error('Expected argument of type protocol.foundation.v1.FederateReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_FederateReply(buffer_arg) {
  return foundation_v1_foundation_pb.FederateReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_foundation_v1_FederateRequest(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.FederateRequest)) {
    throw new Error('Expected argument of type protocol.foundation.v1.FederateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_FederateRequest(buffer_arg) {
  return foundation_v1_foundation_pb.FederateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_foundation_v1_KeyReply(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.KeyReply)) {
    throw new Error('Expected argument of type protocol.foundation.v1.KeyReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_KeyReply(buffer_arg) {
  return foundation_v1_foundation_pb.KeyReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_foundation_v1_KeyRequest(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.KeyRequest)) {
    throw new Error('Expected argument of type protocol.foundation.v1.KeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_KeyRequest(buffer_arg) {
  return foundation_v1_foundation_pb.KeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_foundation_v1_LoginRequest(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.LoginRequest)) {
    throw new Error('Expected argument of type protocol.foundation.v1.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_LoginRequest(buffer_arg) {
  return foundation_v1_foundation_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_foundation_v1_RegisterRequest(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.RegisterRequest)) {
    throw new Error('Expected argument of type protocol.foundation.v1.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_RegisterRequest(buffer_arg) {
  return foundation_v1_foundation_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_foundation_v1_Session(arg) {
  if (!(arg instanceof foundation_v1_foundation_pb.Session)) {
    throw new Error('Expected argument of type protocol.foundation.v1.Session');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_foundation_v1_Session(buffer_arg) {
  return foundation_v1_foundation_pb.Session.deserializeBinary(new Uint8Array(buffer_arg));
}


var FoundationServiceService = exports.FoundationServiceService = {
  federate: {
    path: '/protocol.foundation.v1.FoundationService/Federate',
    requestStream: false,
    responseStream: false,
    requestType: foundation_v1_foundation_pb.FederateRequest,
    responseType: foundation_v1_foundation_pb.FederateReply,
    requestSerialize: serialize_protocol_foundation_v1_FederateRequest,
    requestDeserialize: deserialize_protocol_foundation_v1_FederateRequest,
    responseSerialize: serialize_protocol_foundation_v1_FederateReply,
    responseDeserialize: deserialize_protocol_foundation_v1_FederateReply,
  },
  key: {
    path: '/protocol.foundation.v1.FoundationService/Key',
    requestStream: false,
    responseStream: false,
    requestType: foundation_v1_foundation_pb.KeyRequest,
    responseType: foundation_v1_foundation_pb.KeyReply,
    requestSerialize: serialize_protocol_foundation_v1_KeyRequest,
    requestDeserialize: deserialize_protocol_foundation_v1_KeyRequest,
    responseSerialize: serialize_protocol_foundation_v1_KeyReply,
    responseDeserialize: deserialize_protocol_foundation_v1_KeyReply,
  },
  login: {
    path: '/protocol.foundation.v1.FoundationService/Login',
    requestStream: false,
    responseStream: false,
    requestType: foundation_v1_foundation_pb.LoginRequest,
    responseType: foundation_v1_foundation_pb.Session,
    requestSerialize: serialize_protocol_foundation_v1_LoginRequest,
    requestDeserialize: deserialize_protocol_foundation_v1_LoginRequest,
    responseSerialize: serialize_protocol_foundation_v1_Session,
    responseDeserialize: deserialize_protocol_foundation_v1_Session,
  },
  register: {
    path: '/protocol.foundation.v1.FoundationService/Register',
    requestStream: false,
    responseStream: false,
    requestType: foundation_v1_foundation_pb.RegisterRequest,
    responseType: foundation_v1_foundation_pb.Session,
    requestSerialize: serialize_protocol_foundation_v1_RegisterRequest,
    requestDeserialize: deserialize_protocol_foundation_v1_RegisterRequest,
    responseSerialize: serialize_protocol_foundation_v1_Session,
    responseDeserialize: deserialize_protocol_foundation_v1_Session,
  },
};

exports.FoundationServiceClient = grpc.makeGenericClientConstructor(FoundationServiceService);
