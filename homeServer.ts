export interface IHomeServerSettings {
  SSL: boolean;
  port: string;
}

export enum Kit {
  CORE = "core",
}

export class HomeServer {
  ip: string;
  settings?: IHomeServerSettings;

  constructor(ip: string);
  constructor(ip: string, settings?: IHomeServerSettings);
  constructor(ip: string, settings?: IHomeServerSettings) {
    this.ip = ip;
    this.settings = settings;
  }

  toURL(): URL {
    const url = new URL(this.ip);
    url.protocol = this.settings?.SSL ? "https:" : "http:";
    url.port = this.settings?.port || "";
    return url;
  }

  API(kit: Kit, version: number, path: string): URL {
    const url = new URL(this.ip);
    url.protocol = this.settings?.SSL ? "https:" : "http:";
    url.port = this.settings?.port || "";
    url.pathname = `/api/${kit}/v${version}/${path}`;
    return url;
  }
}
