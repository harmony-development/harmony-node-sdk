import { HomeServer, Kit } from "./homeServer";
import EventEmitter from "eventemitter3";
import FormData from "form-data";
import WebSocket, { CloseEvent, OpenEvent } from "ws";
import { ReqHelper } from "./reqHelper";

export enum SocketEvent {
  SOCKET_CLOSE = "socket_close",
  SOCKET_ERROR = "socket_error",
  SOCKET_OPEN = "socket_open",
  MESSAGE = "message",
}

interface IMessage {
  AuthorID: string;
  GuildID: string;
  ChannelID: string;
  MessageID: string;
  CreatedAt: number;
  Message: string;
  Attachments: string[];
  Actions: any; // TODO: pin down the type of this variable
  Embeds: any; // TODO: pin down the type of this variable
}

interface IGetGuildData {
  guildName: string;
  guildOwner: string;
  guildPicture: string;
}

interface IGetChannelsData {
  channels: {
    name: string;
    id: string;
  }[];
}

type SocketResponses = {
  [SocketEvent.SOCKET_CLOSE]: [CloseEvent];
  [SocketEvent.SOCKET_ERROR]: [ErrorEvent];
  [SocketEvent.SOCKET_OPEN]: [OpenEvent];
  [SocketEvent.MESSAGE]: [IMessage];
};

export class HarmonyConnection {
  server: HomeServer;
  session: string;
  ws: WebSocket;
  events: EventEmitter<SocketResponses>;

  constructor(server: HomeServer, session: string) {
    this.server = server;
    this.session = session;
    this.events = new EventEmitter<SocketResponses>();
    this.ws = new WebSocket(server.getSocketPath().toString());
    this.bindEvents();
  }

  reconnect() {
    this.ws = new WebSocket(this.server.getSocketPath().toString());
    this.bindEvents();
  }

  bindEvents() {
    this.ws.addEventListener("message", (ev) => {
      const parsed = JSON.parse(ev.data);
      this.events.emit(parsed["message"], parsed["data"]);
    });
    this.ws.addEventListener("close", (ev) =>
      this.events.emit(SocketEvent.SOCKET_CLOSE, ev)
    );
    this.ws.addEventListener("open", (ev) =>
      this.events.emit(SocketEvent.SOCKET_OPEN, ev)
    );
  }

  async createGuild(guildName: string) {
    return ReqHelper.post<{
      guild: string;
    }>(
      this.server.API(Kit.CORE, 1, "guilds").toString(),
      null,
      {
        guildName,
      },
      this.session
    );
  }

  async updateGuildName(guildID: string, name: string) {
    return ReqHelper.patch(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/name`).toString(),
      null,
      {
        name,
      },
      this.session
    );
  }

  async updateGuildPicture(guildID: string, picture: File) {
    const data = new FormData();
    data.append("files", picture);
    return ReqHelper.patch(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/picture`).toString(),
      null,
      data,
      this.session
    );
  }

  async deleteGuild(guildID: string) {
    return ReqHelper.delete(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}`).toString(),
      null,
      this.session
    );
  }

  async getGuild(guildID: string) {
    return ReqHelper.get<IGetGuildData>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}`).toString(),
      null,
      this.session
    );
  }

  async getMembers(guildID: string) {
    return ReqHelper.get<{
      members: string[];
    }>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/members`).toString(),
      null,
      this.session
    );
  }

  async getChannels(guildID: string) {
    return ReqHelper.get<IGetChannelsData>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/channels`).toString(),
      null,
      this.session
    );
  }
}
