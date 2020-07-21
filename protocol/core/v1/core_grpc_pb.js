// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var core_v1_core_pb = require('../../core/v1/core_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_ActionEvent(arg) {
  if (!(arg instanceof core_v1_core_pb.ActionEvent)) {
    throw new Error('Expected argument of type protocol.core.v1.ActionEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_ActionEvent(buffer_arg) {
  return core_v1_core_pb.ActionEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_CreateChannelRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.CreateChannelRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.CreateChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_CreateChannelRequest(buffer_arg) {
  return core_v1_core_pb.CreateChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_CreateChannelResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.CreateChannelResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.CreateChannelResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_CreateChannelResponse(buffer_arg) {
  return core_v1_core_pb.CreateChannelResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_CreateGuildRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.CreateGuildRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.CreateGuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_CreateGuildRequest(buffer_arg) {
  return core_v1_core_pb.CreateGuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_CreateGuildResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.CreateGuildResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.CreateGuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_CreateGuildResponse(buffer_arg) {
  return core_v1_core_pb.CreateGuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_CreateInviteRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.CreateInviteRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.CreateInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_CreateInviteRequest(buffer_arg) {
  return core_v1_core_pb.CreateInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_CreateInviteResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.CreateInviteResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.CreateInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_CreateInviteResponse(buffer_arg) {
  return core_v1_core_pb.CreateInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_DeleteChannelRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.DeleteChannelRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.DeleteChannelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_DeleteChannelRequest(buffer_arg) {
  return core_v1_core_pb.DeleteChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_DeleteGuildRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.DeleteGuildRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.DeleteGuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_DeleteGuildRequest(buffer_arg) {
  return core_v1_core_pb.DeleteGuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_DeleteInviteRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.DeleteInviteRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.DeleteInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_DeleteInviteRequest(buffer_arg) {
  return core_v1_core_pb.DeleteInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_DeleteMessageRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.DeleteMessageRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.DeleteMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_DeleteMessageRequest(buffer_arg) {
  return core_v1_core_pb.DeleteMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetChannelMessagesRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.GetChannelMessagesRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.GetChannelMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetChannelMessagesRequest(buffer_arg) {
  return core_v1_core_pb.GetChannelMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetChannelMessagesResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.GetChannelMessagesResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.GetChannelMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetChannelMessagesResponse(buffer_arg) {
  return core_v1_core_pb.GetChannelMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildChannelsRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildChannelsRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildChannelsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildChannelsRequest(buffer_arg) {
  return core_v1_core_pb.GetGuildChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildChannelsResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildChannelsResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildChannelsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildChannelsResponse(buffer_arg) {
  return core_v1_core_pb.GetGuildChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildInvitesRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildInvitesRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildInvitesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildInvitesRequest(buffer_arg) {
  return core_v1_core_pb.GetGuildInvitesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildInvitesResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildInvitesResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildInvitesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildInvitesResponse(buffer_arg) {
  return core_v1_core_pb.GetGuildInvitesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildMembersRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildMembersRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildMembersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildMembersRequest(buffer_arg) {
  return core_v1_core_pb.GetGuildMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildMembersResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildMembersResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildMembersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildMembersResponse(buffer_arg) {
  return core_v1_core_pb.GetGuildMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildRequest(buffer_arg) {
  return core_v1_core_pb.GetGuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GetGuildResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.GetGuildResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.GetGuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GetGuildResponse(buffer_arg) {
  return core_v1_core_pb.GetGuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_GuildEvent(arg) {
  if (!(arg instanceof core_v1_core_pb.GuildEvent)) {
    throw new Error('Expected argument of type protocol.core.v1.GuildEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_GuildEvent(buffer_arg) {
  return core_v1_core_pb.GuildEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_JoinGuildRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.JoinGuildRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.JoinGuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_JoinGuildRequest(buffer_arg) {
  return core_v1_core_pb.JoinGuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_JoinGuildResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.JoinGuildResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.JoinGuildResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_JoinGuildResponse(buffer_arg) {
  return core_v1_core_pb.JoinGuildResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_JoinedLocalGuildsRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.JoinedLocalGuildsRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.JoinedLocalGuildsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_JoinedLocalGuildsRequest(buffer_arg) {
  return core_v1_core_pb.JoinedLocalGuildsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_JoinedLocalGuildsResponse(arg) {
  if (!(arg instanceof core_v1_core_pb.JoinedLocalGuildsResponse)) {
    throw new Error('Expected argument of type protocol.core.v1.JoinedLocalGuildsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_JoinedLocalGuildsResponse(buffer_arg) {
  return core_v1_core_pb.JoinedLocalGuildsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_LeaveGuildRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.LeaveGuildRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.LeaveGuildRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_LeaveGuildRequest(buffer_arg) {
  return core_v1_core_pb.LeaveGuildRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_SendMessageRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_SendMessageRequest(buffer_arg) {
  return core_v1_core_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_StreamActionEventsRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.StreamActionEventsRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.StreamActionEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_StreamActionEventsRequest(buffer_arg) {
  return core_v1_core_pb.StreamActionEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_StreamGuildEventsRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.StreamGuildEventsRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.StreamGuildEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_StreamGuildEventsRequest(buffer_arg) {
  return core_v1_core_pb.StreamGuildEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_TriggerActionRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.TriggerActionRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.TriggerActionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_TriggerActionRequest(buffer_arg) {
  return core_v1_core_pb.TriggerActionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_UpdateChannelNameRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.UpdateChannelNameRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.UpdateChannelNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_UpdateChannelNameRequest(buffer_arg) {
  return core_v1_core_pb.UpdateChannelNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_UpdateGuildNameRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.UpdateGuildNameRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.UpdateGuildNameRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_UpdateGuildNameRequest(buffer_arg) {
  return core_v1_core_pb.UpdateGuildNameRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_protocol_core_v1_UpdateMessageRequest(arg) {
  if (!(arg instanceof core_v1_core_pb.UpdateMessageRequest)) {
    throw new Error('Expected argument of type protocol.core.v1.UpdateMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_protocol_core_v1_UpdateMessageRequest(buffer_arg) {
  return core_v1_core_pb.UpdateMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoreServiceService = exports.CoreServiceService = {
  createGuild: {
    path: '/protocol.core.v1.CoreService/CreateGuild',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.CreateGuildRequest,
    responseType: core_v1_core_pb.CreateGuildResponse,
    requestSerialize: serialize_protocol_core_v1_CreateGuildRequest,
    requestDeserialize: deserialize_protocol_core_v1_CreateGuildRequest,
    responseSerialize: serialize_protocol_core_v1_CreateGuildResponse,
    responseDeserialize: deserialize_protocol_core_v1_CreateGuildResponse,
  },
  createInvite: {
    path: '/protocol.core.v1.CoreService/CreateInvite',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.CreateInviteRequest,
    responseType: core_v1_core_pb.CreateInviteResponse,
    requestSerialize: serialize_protocol_core_v1_CreateInviteRequest,
    requestDeserialize: deserialize_protocol_core_v1_CreateInviteRequest,
    responseSerialize: serialize_protocol_core_v1_CreateInviteResponse,
    responseDeserialize: deserialize_protocol_core_v1_CreateInviteResponse,
  },
  createChannel: {
    path: '/protocol.core.v1.CoreService/CreateChannel',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.CreateChannelRequest,
    responseType: core_v1_core_pb.CreateChannelResponse,
    requestSerialize: serialize_protocol_core_v1_CreateChannelRequest,
    requestDeserialize: deserialize_protocol_core_v1_CreateChannelRequest,
    responseSerialize: serialize_protocol_core_v1_CreateChannelResponse,
    responseDeserialize: deserialize_protocol_core_v1_CreateChannelResponse,
  },
  getGuild: {
    path: '/protocol.core.v1.CoreService/GetGuild',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.GetGuildRequest,
    responseType: core_v1_core_pb.GetGuildResponse,
    requestSerialize: serialize_protocol_core_v1_GetGuildRequest,
    requestDeserialize: deserialize_protocol_core_v1_GetGuildRequest,
    responseSerialize: serialize_protocol_core_v1_GetGuildResponse,
    responseDeserialize: deserialize_protocol_core_v1_GetGuildResponse,
  },
  getGuildInvites: {
    path: '/protocol.core.v1.CoreService/GetGuildInvites',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.GetGuildInvitesRequest,
    responseType: core_v1_core_pb.GetGuildInvitesResponse,
    requestSerialize: serialize_protocol_core_v1_GetGuildInvitesRequest,
    requestDeserialize: deserialize_protocol_core_v1_GetGuildInvitesRequest,
    responseSerialize: serialize_protocol_core_v1_GetGuildInvitesResponse,
    responseDeserialize: deserialize_protocol_core_v1_GetGuildInvitesResponse,
  },
  getGuildMembers: {
    path: '/protocol.core.v1.CoreService/GetGuildMembers',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.GetGuildMembersRequest,
    responseType: core_v1_core_pb.GetGuildMembersResponse,
    requestSerialize: serialize_protocol_core_v1_GetGuildMembersRequest,
    requestDeserialize: deserialize_protocol_core_v1_GetGuildMembersRequest,
    responseSerialize: serialize_protocol_core_v1_GetGuildMembersResponse,
    responseDeserialize: deserialize_protocol_core_v1_GetGuildMembersResponse,
  },
  getGuildChannels: {
    path: '/protocol.core.v1.CoreService/GetGuildChannels',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.GetGuildChannelsRequest,
    responseType: core_v1_core_pb.GetGuildChannelsResponse,
    requestSerialize: serialize_protocol_core_v1_GetGuildChannelsRequest,
    requestDeserialize: deserialize_protocol_core_v1_GetGuildChannelsRequest,
    responseSerialize: serialize_protocol_core_v1_GetGuildChannelsResponse,
    responseDeserialize: deserialize_protocol_core_v1_GetGuildChannelsResponse,
  },
  getChannelMessages: {
    path: '/protocol.core.v1.CoreService/GetChannelMessages',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.GetChannelMessagesRequest,
    responseType: core_v1_core_pb.GetChannelMessagesResponse,
    requestSerialize: serialize_protocol_core_v1_GetChannelMessagesRequest,
    requestDeserialize: deserialize_protocol_core_v1_GetChannelMessagesRequest,
    responseSerialize: serialize_protocol_core_v1_GetChannelMessagesResponse,
    responseDeserialize: deserialize_protocol_core_v1_GetChannelMessagesResponse,
  },
  updateGuildName: {
    path: '/protocol.core.v1.CoreService/UpdateGuildName',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.UpdateGuildNameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_UpdateGuildNameRequest,
    requestDeserialize: deserialize_protocol_core_v1_UpdateGuildNameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateChannelName: {
    path: '/protocol.core.v1.CoreService/UpdateChannelName',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.UpdateChannelNameRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_UpdateChannelNameRequest,
    requestDeserialize: deserialize_protocol_core_v1_UpdateChannelNameRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  updateMessage: {
    path: '/protocol.core.v1.CoreService/UpdateMessage',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.UpdateMessageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_UpdateMessageRequest,
    requestDeserialize: deserialize_protocol_core_v1_UpdateMessageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteGuild: {
    path: '/protocol.core.v1.CoreService/DeleteGuild',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.DeleteGuildRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_DeleteGuildRequest,
    requestDeserialize: deserialize_protocol_core_v1_DeleteGuildRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteInvite: {
    path: '/protocol.core.v1.CoreService/DeleteInvite',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.DeleteInviteRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_DeleteInviteRequest,
    requestDeserialize: deserialize_protocol_core_v1_DeleteInviteRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteChannel: {
    path: '/protocol.core.v1.CoreService/DeleteChannel',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.DeleteChannelRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_DeleteChannelRequest,
    requestDeserialize: deserialize_protocol_core_v1_DeleteChannelRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  deleteMessage: {
    path: '/protocol.core.v1.CoreService/DeleteMessage',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.DeleteMessageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_DeleteMessageRequest,
    requestDeserialize: deserialize_protocol_core_v1_DeleteMessageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  joinGuild: {
    path: '/protocol.core.v1.CoreService/JoinGuild',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.JoinGuildRequest,
    responseType: core_v1_core_pb.JoinGuildResponse,
    requestSerialize: serialize_protocol_core_v1_JoinGuildRequest,
    requestDeserialize: deserialize_protocol_core_v1_JoinGuildRequest,
    responseSerialize: serialize_protocol_core_v1_JoinGuildResponse,
    responseDeserialize: deserialize_protocol_core_v1_JoinGuildResponse,
  },
  leaveGuild: {
    path: '/protocol.core.v1.CoreService/LeaveGuild',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.LeaveGuildRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_LeaveGuildRequest,
    requestDeserialize: deserialize_protocol_core_v1_LeaveGuildRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  triggerAction: {
    path: '/protocol.core.v1.CoreService/TriggerAction',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.TriggerActionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_TriggerActionRequest,
    requestDeserialize: deserialize_protocol_core_v1_TriggerActionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  sendMessage: {
    path: '/protocol.core.v1.CoreService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.SendMessageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_protocol_core_v1_SendMessageRequest,
    requestDeserialize: deserialize_protocol_core_v1_SendMessageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  localGuilds: {
    path: '/protocol.core.v1.CoreService/LocalGuilds',
    requestStream: false,
    responseStream: false,
    requestType: core_v1_core_pb.JoinedLocalGuildsRequest,
    responseType: core_v1_core_pb.JoinedLocalGuildsResponse,
    requestSerialize: serialize_protocol_core_v1_JoinedLocalGuildsRequest,
    requestDeserialize: deserialize_protocol_core_v1_JoinedLocalGuildsRequest,
    responseSerialize: serialize_protocol_core_v1_JoinedLocalGuildsResponse,
    responseDeserialize: deserialize_protocol_core_v1_JoinedLocalGuildsResponse,
  },
  streamGuildEvents: {
    path: '/protocol.core.v1.CoreService/StreamGuildEvents',
    requestStream: false,
    responseStream: true,
    requestType: core_v1_core_pb.StreamGuildEventsRequest,
    responseType: core_v1_core_pb.GuildEvent,
    requestSerialize: serialize_protocol_core_v1_StreamGuildEventsRequest,
    requestDeserialize: deserialize_protocol_core_v1_StreamGuildEventsRequest,
    responseSerialize: serialize_protocol_core_v1_GuildEvent,
    responseDeserialize: deserialize_protocol_core_v1_GuildEvent,
  },
  streamActionEvents: {
    path: '/protocol.core.v1.CoreService/StreamActionEvents',
    requestStream: false,
    responseStream: true,
    requestType: core_v1_core_pb.StreamActionEventsRequest,
    responseType: core_v1_core_pb.ActionEvent,
    requestSerialize: serialize_protocol_core_v1_StreamActionEventsRequest,
    requestDeserialize: deserialize_protocol_core_v1_StreamActionEventsRequest,
    responseSerialize: serialize_protocol_core_v1_ActionEvent,
    responseDeserialize: deserialize_protocol_core_v1_ActionEvent,
  },
};

exports.CoreServiceClient = grpc.makeGenericClientConstructor(CoreServiceService);
