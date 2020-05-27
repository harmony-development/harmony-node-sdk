const sdk = require("harmony-node-sdk");

const conn = new sdk.HarmonyConnection(
  new sdk.HomeServer("http://localhost", {
    port: "2289",
    SSL: false,
  })
);

conn
  .loginWithEmail("developer@harmonyapp.io", "superC@@lAndS3curePassword")
  .then((val) => {
    console.log(val);
  })
  .catch((e) => console.warn(e));
