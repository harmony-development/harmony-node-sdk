import { HomeServer } from "./homeServer";
import EventEmitter from "eventemitter3";
import WebSocket, { CloseEvent, OpenEvent } from "ws";
export declare enum SocketEvent {
    SOCKET_CLOSE = "socket_close",
    SOCKET_ERROR = "socket_error",
    SOCKET_OPEN = "socket_open",
    MESSAGE = "message"
}
interface IMessage {
    AuthorID: string;
    GuildID: string;
    ChannelID: string;
    MessageID: string;
    CreatedAt: number;
    Message: string;
    Attachments: string[];
    Actions: any;
    Embeds: any;
}
declare type SocketResponses = {
    [SocketEvent.SOCKET_CLOSE]: [CloseEvent];
    [SocketEvent.SOCKET_ERROR]: [ErrorEvent];
    [SocketEvent.SOCKET_OPEN]: [OpenEvent];
    [SocketEvent.MESSAGE]: [IMessage];
};
export declare class HarmonyConnection {
    server: HomeServer;
    session: string;
    ws: WebSocket;
    events: EventEmitter<SocketResponses>;
    constructor(server: HomeServer, session: string);
    reconnect(): void;
    bindEvents(): void;
}
export {};
