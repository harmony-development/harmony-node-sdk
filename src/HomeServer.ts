import { ReqHelper } from './reqHelper';
import URL from 'url-parse';

export interface IHomeServerSettings {
  SSL: boolean;
  port: string;
}

export enum Kit {
  PROTOCOL = 'protocol',
  CORE = 'core',
  PROFILE = 'profile',
}

export class HomeServer {
  host: string;
  settings?: IHomeServerSettings;

  constructor(host: string, settings?: IHomeServerSettings) {
    this.host = host;
    this.settings = settings;
  }

  toURL(): URL {
    const url = new URL(this.host);
    url.set('protocol', this.settings?.SSL ? 'https:' : 'http:');
    url.set('port', this.settings?.port || '');
    return url;
  }

  API(kit: Kit, version: number, path: string): URL {
    const url = new URL(this.host);
    url.set('protocol', this.settings?.SSL ? 'https:' : 'http:');
    url.set('port', this.settings?.port || '');
    url.set('pathname', `/api/${kit}/v${version}/${path}`);
    return url;
  }

  protocol(path: string): URL {
    const url = new URL(this.host);
    url.set('protocol', this.settings?.SSL ? 'https:' : 'http:');
    url.set('port', this.settings?.port || '');
    url.set('pathname', `/api/protocol/${path}`);
    return url;
  }

  getSocketPath(): URL {
    const url = new URL(this.host);
    url.set('protocol', this.settings?.SSL ? 'wss:' : 'ws');
    url.set('port', this.settings?.port || '');
    url.set('pathname', '/api/socket');
    return url;
  }

  async register(email: string, username: string, password: string) {
    return ReqHelper.post<{
      session: string;
    }>(this.protocol('register').toString(), {
      body: {
        email,
        username,
        password,
      },
    });
  }

  async loginWithEmail(email: string, password: string) {
    return ReqHelper.post<{
      session: string;
    }>(this.protocol('login').toString(), {
      body: {
        email,
        password,
      },
    });
  }

  async loginWithToken(origin: HomeServer, token: string) {
    return ReqHelper.post<{
      session: string;
    }>(this.protocol('login').toString(), {
      body: {
        domain: origin.toURL().toString(),
        authtoken: token,
      },
    });
  }
}
