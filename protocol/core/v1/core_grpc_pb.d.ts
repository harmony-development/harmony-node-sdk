// GENERATED CODE -- DO NOT EDIT!

// package: protocol.core.v1
// file: core/v1/core.proto

import * as core_v1_core_pb from "../../core/v1/core_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGuild: grpc.MethodDefinition<core_v1_core_pb.CreateGuildRequest, core_v1_core_pb.CreateGuildResponse>;
  createInvite: grpc.MethodDefinition<core_v1_core_pb.CreateInviteRequest, core_v1_core_pb.CreateInviteResponse>;
  createChannel: grpc.MethodDefinition<core_v1_core_pb.CreateChannelRequest, core_v1_core_pb.CreateChannelResponse>;
  getGuild: grpc.MethodDefinition<core_v1_core_pb.GetGuildRequest, core_v1_core_pb.GetGuildResponse>;
  getGuildInvites: grpc.MethodDefinition<core_v1_core_pb.GetGuildInvitesRequest, core_v1_core_pb.GetGuildInvitesResponse>;
  getGuildMembers: grpc.MethodDefinition<core_v1_core_pb.GetGuildMembersRequest, core_v1_core_pb.GetGuildMembersResponse>;
  getGuildChannels: grpc.MethodDefinition<core_v1_core_pb.GetGuildChannelsRequest, core_v1_core_pb.GetGuildChannelsResponse>;
  getChannelMessages: grpc.MethodDefinition<core_v1_core_pb.GetChannelMessagesRequest, core_v1_core_pb.GetChannelMessagesResponse>;
  updateGuildName: grpc.MethodDefinition<core_v1_core_pb.UpdateGuildNameRequest, google_protobuf_empty_pb.Empty>;
  updateChannelName: grpc.MethodDefinition<core_v1_core_pb.UpdateChannelNameRequest, google_protobuf_empty_pb.Empty>;
  updateMessage: grpc.MethodDefinition<core_v1_core_pb.UpdateMessageRequest, google_protobuf_empty_pb.Empty>;
  deleteGuild: grpc.MethodDefinition<core_v1_core_pb.DeleteGuildRequest, google_protobuf_empty_pb.Empty>;
  deleteInvite: grpc.MethodDefinition<core_v1_core_pb.DeleteInviteRequest, google_protobuf_empty_pb.Empty>;
  deleteChannel: grpc.MethodDefinition<core_v1_core_pb.DeleteChannelRequest, google_protobuf_empty_pb.Empty>;
  deleteMessage: grpc.MethodDefinition<core_v1_core_pb.DeleteMessageRequest, google_protobuf_empty_pb.Empty>;
  joinGuild: grpc.MethodDefinition<core_v1_core_pb.JoinGuildRequest, core_v1_core_pb.JoinGuildResponse>;
  leaveGuild: grpc.MethodDefinition<core_v1_core_pb.LeaveGuildRequest, google_protobuf_empty_pb.Empty>;
  triggerAction: grpc.MethodDefinition<core_v1_core_pb.TriggerActionRequest, google_protobuf_empty_pb.Empty>;
  sendMessage: grpc.MethodDefinition<core_v1_core_pb.SendMessageRequest, google_protobuf_empty_pb.Empty>;
  localGuilds: grpc.MethodDefinition<core_v1_core_pb.JoinedLocalGuildsRequest, core_v1_core_pb.JoinedLocalGuildsResponse>;
  streamGuildEvents: grpc.MethodDefinition<core_v1_core_pb.StreamGuildEventsRequest, core_v1_core_pb.GuildEvent>;
  streamActionEvents: grpc.MethodDefinition<core_v1_core_pb.StreamActionEventsRequest, core_v1_core_pb.ActionEvent>;
}

export const CoreServiceService: ICoreServiceService;

export class CoreServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createGuild(argument: core_v1_core_pb.CreateGuildRequest, callback: grpc.requestCallback<core_v1_core_pb.CreateGuildResponse>): grpc.ClientUnaryCall;
  createGuild(argument: core_v1_core_pb.CreateGuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.CreateGuildResponse>): grpc.ClientUnaryCall;
  createGuild(argument: core_v1_core_pb.CreateGuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.CreateGuildResponse>): grpc.ClientUnaryCall;
  createInvite(argument: core_v1_core_pb.CreateInviteRequest, callback: grpc.requestCallback<core_v1_core_pb.CreateInviteResponse>): grpc.ClientUnaryCall;
  createInvite(argument: core_v1_core_pb.CreateInviteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.CreateInviteResponse>): grpc.ClientUnaryCall;
  createInvite(argument: core_v1_core_pb.CreateInviteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.CreateInviteResponse>): grpc.ClientUnaryCall;
  createChannel(argument: core_v1_core_pb.CreateChannelRequest, callback: grpc.requestCallback<core_v1_core_pb.CreateChannelResponse>): grpc.ClientUnaryCall;
  createChannel(argument: core_v1_core_pb.CreateChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.CreateChannelResponse>): grpc.ClientUnaryCall;
  createChannel(argument: core_v1_core_pb.CreateChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.CreateChannelResponse>): grpc.ClientUnaryCall;
  getGuild(argument: core_v1_core_pb.GetGuildRequest, callback: grpc.requestCallback<core_v1_core_pb.GetGuildResponse>): grpc.ClientUnaryCall;
  getGuild(argument: core_v1_core_pb.GetGuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildResponse>): grpc.ClientUnaryCall;
  getGuild(argument: core_v1_core_pb.GetGuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildResponse>): grpc.ClientUnaryCall;
  getGuildInvites(argument: core_v1_core_pb.GetGuildInvitesRequest, callback: grpc.requestCallback<core_v1_core_pb.GetGuildInvitesResponse>): grpc.ClientUnaryCall;
  getGuildInvites(argument: core_v1_core_pb.GetGuildInvitesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildInvitesResponse>): grpc.ClientUnaryCall;
  getGuildInvites(argument: core_v1_core_pb.GetGuildInvitesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildInvitesResponse>): grpc.ClientUnaryCall;
  getGuildMembers(argument: core_v1_core_pb.GetGuildMembersRequest, callback: grpc.requestCallback<core_v1_core_pb.GetGuildMembersResponse>): grpc.ClientUnaryCall;
  getGuildMembers(argument: core_v1_core_pb.GetGuildMembersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildMembersResponse>): grpc.ClientUnaryCall;
  getGuildMembers(argument: core_v1_core_pb.GetGuildMembersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildMembersResponse>): grpc.ClientUnaryCall;
  getGuildChannels(argument: core_v1_core_pb.GetGuildChannelsRequest, callback: grpc.requestCallback<core_v1_core_pb.GetGuildChannelsResponse>): grpc.ClientUnaryCall;
  getGuildChannels(argument: core_v1_core_pb.GetGuildChannelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildChannelsResponse>): grpc.ClientUnaryCall;
  getGuildChannels(argument: core_v1_core_pb.GetGuildChannelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetGuildChannelsResponse>): grpc.ClientUnaryCall;
  getChannelMessages(argument: core_v1_core_pb.GetChannelMessagesRequest, callback: grpc.requestCallback<core_v1_core_pb.GetChannelMessagesResponse>): grpc.ClientUnaryCall;
  getChannelMessages(argument: core_v1_core_pb.GetChannelMessagesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetChannelMessagesResponse>): grpc.ClientUnaryCall;
  getChannelMessages(argument: core_v1_core_pb.GetChannelMessagesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.GetChannelMessagesResponse>): grpc.ClientUnaryCall;
  updateGuildName(argument: core_v1_core_pb.UpdateGuildNameRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateGuildName(argument: core_v1_core_pb.UpdateGuildNameRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateGuildName(argument: core_v1_core_pb.UpdateGuildNameRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateChannelName(argument: core_v1_core_pb.UpdateChannelNameRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateChannelName(argument: core_v1_core_pb.UpdateChannelNameRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateChannelName(argument: core_v1_core_pb.UpdateChannelNameRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateMessage(argument: core_v1_core_pb.UpdateMessageRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateMessage(argument: core_v1_core_pb.UpdateMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateMessage(argument: core_v1_core_pb.UpdateMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGuild(argument: core_v1_core_pb.DeleteGuildRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGuild(argument: core_v1_core_pb.DeleteGuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGuild(argument: core_v1_core_pb.DeleteGuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInvite(argument: core_v1_core_pb.DeleteInviteRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInvite(argument: core_v1_core_pb.DeleteInviteRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInvite(argument: core_v1_core_pb.DeleteInviteRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteChannel(argument: core_v1_core_pb.DeleteChannelRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteChannel(argument: core_v1_core_pb.DeleteChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteChannel(argument: core_v1_core_pb.DeleteChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMessage(argument: core_v1_core_pb.DeleteMessageRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMessage(argument: core_v1_core_pb.DeleteMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMessage(argument: core_v1_core_pb.DeleteMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  joinGuild(argument: core_v1_core_pb.JoinGuildRequest, callback: grpc.requestCallback<core_v1_core_pb.JoinGuildResponse>): grpc.ClientUnaryCall;
  joinGuild(argument: core_v1_core_pb.JoinGuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.JoinGuildResponse>): grpc.ClientUnaryCall;
  joinGuild(argument: core_v1_core_pb.JoinGuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.JoinGuildResponse>): grpc.ClientUnaryCall;
  leaveGuild(argument: core_v1_core_pb.LeaveGuildRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  leaveGuild(argument: core_v1_core_pb.LeaveGuildRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  leaveGuild(argument: core_v1_core_pb.LeaveGuildRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  triggerAction(argument: core_v1_core_pb.TriggerActionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  triggerAction(argument: core_v1_core_pb.TriggerActionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  triggerAction(argument: core_v1_core_pb.TriggerActionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sendMessage(argument: core_v1_core_pb.SendMessageRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sendMessage(argument: core_v1_core_pb.SendMessageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sendMessage(argument: core_v1_core_pb.SendMessageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  localGuilds(argument: core_v1_core_pb.JoinedLocalGuildsRequest, callback: grpc.requestCallback<core_v1_core_pb.JoinedLocalGuildsResponse>): grpc.ClientUnaryCall;
  localGuilds(argument: core_v1_core_pb.JoinedLocalGuildsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.JoinedLocalGuildsResponse>): grpc.ClientUnaryCall;
  localGuilds(argument: core_v1_core_pb.JoinedLocalGuildsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<core_v1_core_pb.JoinedLocalGuildsResponse>): grpc.ClientUnaryCall;
  streamGuildEvents(argument: core_v1_core_pb.StreamGuildEventsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<core_v1_core_pb.GuildEvent>;
  streamGuildEvents(argument: core_v1_core_pb.StreamGuildEventsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<core_v1_core_pb.GuildEvent>;
  streamActionEvents(argument: core_v1_core_pb.StreamActionEventsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<core_v1_core_pb.ActionEvent>;
  streamActionEvents(argument: core_v1_core_pb.StreamActionEventsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<core_v1_core_pb.ActionEvent>;
}
