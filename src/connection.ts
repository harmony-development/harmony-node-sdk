import { HomeServer } from "./homeServer";
import EventEmitter from "eventemitter3";
import WebSocket, { CloseEvent, OpenEvent } from "ws";

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
    this.ws = new WebSocket(server.getSocketPath().toString());
    this.events = new EventEmitter<SocketResponses>();
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
}
