import { HomeServer, Kit } from './HomeServer';
import EventEmitter from 'eventemitter3';
import FormData from 'form-data';
import WebSocket, { CloseEvent, OpenEvent } from 'isomorphic-ws';
import { ReqHelper } from './reqHelper';
import { IAction, IEmbed } from './Embeds';

export enum SocketEvent {
  SOCKET_CLOSE = 'socket_close',
  SOCKET_ERROR = 'socket_error',
  SOCKET_OPEN = 'socket_open',
  MESSAGE = 'message',
}

interface IMessage {
  AuthorID: string;
  GuildID: string;
  ChannelID: string;
  MessageID: string;
  CreatedAt: number;
  Message: string;
  Attachments: string[];
  Actions?: IAction;
  Embeds?: IEmbed[];
}

interface IGetGuildData {
  GuildName: string;
  GuildOwner: string;
  GuildPicture: string;
}

interface IGetChannelsData {
  channels: {
    name: string;
    id: string;
  }[];
}

interface IGetInvitesData {
  invites: {
    inviteID: string;
    uses: number;
    possibleUses: number | null;
  }[];
}

interface IGetUserData {
  username: string;
  useravatar: string;
  userstatus: string;
}

enum UserStatus {
  ONLINE,
  STREAMING,
  IDLE,
  OFFLINE,
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
    this.ws.addEventListener('message', (ev) => {
      const parsed = JSON.parse(ev.data);
      this.events.emit(parsed['message'], parsed['data']);
    });
    this.ws.addEventListener('close', (ev) => this.events.emit(SocketEvent.SOCKET_CLOSE, ev));
    this.ws.addEventListener('open', (ev) => this.events.emit(SocketEvent.SOCKET_OPEN, ev));
  }

  async createGuild(guildName: string) {
    return ReqHelper.post<{
      guild: string;
    }>(this.server.API(Kit.CORE, 1, 'guilds').toString(), {
      body: {
        guildName,
      },
      authorization: this.session,
    });
  }

  async updateGuildName(guildID: string, name: string) {
    return ReqHelper.patch(this.server.API(Kit.CORE, 1, `guilds/${guildID}/name`).toString(), {
      body: {
        name,
      },
      authorization: this.session,
    });
  }

  async updateGuildPicture(guildID: string, picture: File) {
    const data = new FormData();
    data.append('files', picture);
    return ReqHelper.patch(this.server.API(Kit.CORE, 1, `guilds/${guildID}/picture`).toString(), {
      body: data,
      authorization: this.session,
    });
  }

  async deleteGuild(guildID: string) {
    return ReqHelper.delete(this.server.API(Kit.CORE, 1, `guilds/${guildID}`).toString(), {
      authorization: this.session,
    });
  }

  async getGuilds() {
    return ReqHelper.get<string[]>(this.server.API(Kit.CORE, 1, `users/~/guilds`).toString(), {
      authorization: this.session,
    });
  }

  async getGuild(guildID: string) {
    return ReqHelper.get<IGetGuildData>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}`).toString(),
      {
        authorization: this.session,
      }
    );
  }

  async getMembers(guildID: string) {
    return ReqHelper.get<{
      members: string[];
    }>(this.server.API(Kit.CORE, 1, `guilds/${guildID}/members`).toString(), {
      authorization: this.session,
    });
  }

  async getChannels(guildID: string) {
    return ReqHelper.get<IGetChannelsData>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/channels`).toString(),
      {
        authorization: this.session,
      }
    );
  }

  async addChannel(guildID: string, channelName: string) {
    return ReqHelper.post(this.server.API(Kit.CORE, 1, `guilds/${guildID}/channels`).toString(), {
      body: {
        channelName,
      },
      authorization: this.session,
    });
  }

  async deleteChannel(guildID: string, channelID: string) {
    return ReqHelper.delete(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/channels/${channelID}`).toString(),
      {
        authorization: this.session,
      }
    );
  }

  async createInvite(guildID: string, name: string) {
    return ReqHelper.post<{
      invite: string;
    }>(this.server.API(Kit.CORE, 1, `guilds/${guildID}/invites`).toString(), {
      body: {
        name,
      },
      authorization: this.session,
    });
  }

  async getInvites(guildID: string) {
    return ReqHelper.get<IGetInvitesData>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/invites`).toString(),
      {
        authorization: this.session,
      }
    );
  }

  async deleteInvite(guildID: string, inviteID: string) {
    return ReqHelper.delete(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/invites/${inviteID}`).toString(),
      {
        body: {
          invite: inviteID,
        },
        authorization: this.session,
      }
    );
  }

  async getMessages(guildID: string, channelID: string): Promise<IMessage[]>;

  async getMessages(guildID: string, channelID: string, beforeMessage?: string) {
    return ReqHelper.get<IMessage[]>(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/channels/${channelID}`).toString(),
      {
        authorization: this.session,
        params: beforeMessage
          ? {
              before_message: beforeMessage,
            }
          : null,
      }
    );
  }

  async deleteMessage(guildID: string, channelID: string, messageID: string) {
    return ReqHelper.delete(
      this.server
        .API(Kit.CORE, 1, `guilds/${guildID}/channels/${channelID}/messages/${messageID}`)
        .toString(),
      {
        authorization: this.session,
      }
    );
  }

  async joinGuild(inviteID: string) {
    return ReqHelper.post(this.server.API(Kit.CORE, 1, `users/~/guilds/join`).toString(), {
      authorization: this.session,
      body: {
        invite_id: inviteID,
      },
    });
  }

  async leaveGuild(guildID: string) {
    return ReqHelper.post(
      this.server.API(Kit.CORE, 1, `users/~/guilds/leave/${guildID}`).toString(),
      {
        authorization: this.session,
      }
    );
  }

  async sendMessage(
    guildID: string,
    channelID: string,
    content: string,
    embeds?: IEmbed[],
    actions?: IAction[]
  ): Promise<void>;

  async sendMessage(
    guildID: string,
    channelID: string,
    content: string,
    embeds?: IEmbed[],
    actions?: IAction[]
  ) {
    return ReqHelper.post(
      this.server.API(Kit.CORE, 1, `guilds/${guildID}/channels/${channelID}/messages`).toString(),
      {
        authorization: this.session,
        body: {
          content,
          embeds,
          actions,
        },
      }
    );
  }

  async updateMessage(
    guildID: string,
    channelID: string,
    messageID: string,
    content: string,
    embeds?: IEmbed[],
    actions?: IAction[]
  ) {
    return ReqHelper.post(
      this.server
        .API(Kit.CORE, 1, `guilds/${guildID}/channels/${channelID}/messages/${messageID}`)
        .toString(),
      {
        authorization: this.session,
        body: {
          content,
          embeds,
          actions,
        },
      }
    );
  }

  async getUser(userID: string) {
    return ReqHelper.get<IGetUserData>(
      this.server.API(Kit.PROFILE, 1, `users/${userID}`).toString(),
      {
        authorization: this.session,
      }
    );
  }

  async updateAvatar(newAvatar: File) {
    const data = new FormData();
    data.append('files', newAvatar);
    return ReqHelper.patch(this.server.API(Kit.PROFILE, 1, `users/~/avatar`).toString(), {
      body: data,
      authorization: this.session,
    });
  }

  async updateUsername(newUsername: string) {
    return ReqHelper.get(this.server.API(Kit.PROFILE, 1, `users/~/username`).toString(), {
      authorization: this.session,
      body: {
        username: newUsername,
      },
    });
  }

  async updateStatus(newStatus: UserStatus) {
    return ReqHelper.get(this.server.API(Kit.PROFILE, 1, `users/~/username`).toString(), {
      authorization: this.session,
      body: {
        status: newStatus,
      },
    });
  }
}
