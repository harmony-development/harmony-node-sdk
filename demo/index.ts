import { HarmonyConnection, HomeServer, SocketEvent } from "harmony-node-sdk";

const defaultServer = new HomeServer("https://localhost", {
  port: "2289",
  SSL: false,
});

defaultServer
  .loginWithEmail("developer@harmonyapp.io", "superC@@lAndS3curePassword")
  .then((resp) => {
    const connection = new HarmonyConnection(defaultServer, resp.session);
    connection.events.addListener(SocketEvent.MESSAGE, (msg) => {
      console.log(msg.Message);
    });
  })
  .catch((e: Error) => console.error(e.message));
