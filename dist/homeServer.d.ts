export interface IHomeServerSettings {
    SSL: boolean;
    port: string;
}
export declare enum Kit {
    CORE = "core"
}
export declare class HomeServer {
    ip: string;
    settings?: IHomeServerSettings;
    constructor(ip: string);
    constructor(ip: string, settings?: IHomeServerSettings);
    toURL(): URL;
    API(kit: Kit, version: number, path: string): URL;
}
