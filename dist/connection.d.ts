import { HomeServer } from "./homeServer";
export declare class HarmonyConnection {
    server: HomeServer;
    constructor(server: HomeServer);
    loginWithEmail(email: string, password: string): Promise<{
        session: string;
    }>;
    loginWithToken(origin: HomeServer, token: string): Promise<{
        session: string;
    }>;
}
