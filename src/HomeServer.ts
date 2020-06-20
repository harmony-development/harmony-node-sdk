import { ReqHelper } from './reqHelper';
import URL from 'url-parse';

export enum Kit {
  PROTOCOL = 'protocol',
  CORE = 'core',
  PROFILE = 'profile',
}

export class HomeServer {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  toURL(): URL {
    const url = new URL(this.host, {});
    return url;
  }

  API(kit: Kit, version: number, path: string): URL {
    const url = new URL(this.host, {});
    url.set('pathname', `/api/${kit}/v${version}/${path}`);
    return url;
  }

  protocol(path: string): URL {
    const url = new URL(this.host, {});
    url.set('pathname', `/api/protocol/${path}`);
    return url;
  }

  getSocketPath(): URL {
    const url = new URL(this.host, {});
    url.set('protocol', url.protocol === 'https:' ? 'wss:' : 'ws:');
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
