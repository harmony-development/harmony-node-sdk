import { ReqHelper } from './reqHelper';

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
    const url = new URL(this.host);
    return url;
  }

  API(kit: Kit, version: number, path: string): URL {
    const url = new URL(this.host);
    url.pathname = `/api/${kit}/v${version}/${path}`;
    return url;
  }

  protocol(path: string): URL {
    const url = new URL(this.host);
    url.pathname = `/api/protocol/${path}`;
    return url;
  }

  getSocketPath(): URL {
    const url = this.protocol('socket');
    url.protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
    return url;
  }

  async register(email: string, username: string, password: string) {
    return ReqHelper.post<{
      session: string;
    }>(this.protocol('register'), {
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
      user_id: string;
    }>(this.protocol('login'), {
      body: {
        email,
        password,
      },
    });
  }

  async loginWithToken(origin: HomeServer, token: string) {
    return ReqHelper.post<{
      session: string;
      user_id: string;
    }>(this.protocol('login'), {
      body: {
        domain: origin.toURL().toString(),
        authtoken: token,
      },
    });
  }
}
