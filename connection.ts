import { ReqHelper } from "./reqHelper";
import { HomeServer, Kit } from "./homeServer";

export class HarmonyConnection {
  server: HomeServer;

  constructor(server: HomeServer) {
    this.server = server;
  }

  async loginWithEmail(email: string, password: string) {
    return ReqHelper.post<{
      session: string;
    }>(this.server.API(Kit.CORE, 1, "login").toString(), null, {
      email,
      password,
    });
  }

  async loginWithToken(origin: HomeServer, token: string) {
    return ReqHelper.post<{
      session: string;
    }>(this.server.API(Kit.CORE, 1, "login").toString(), null, {
      domain: origin.toURL().toString(),
      authtoken: token,
    });
  }
}
