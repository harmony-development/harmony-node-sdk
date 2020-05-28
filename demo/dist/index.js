"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var harmony_node_sdk_1 = require("harmony-node-sdk");
var defaultServer = new harmony_node_sdk_1.HomeServer("https://localhost", {
    port: "2289",
    SSL: false,
});
defaultServer
    .loginWithEmail("developer@harmonyapp.io", "superC@@lAndS3curePassword")
    .then(function (resp) {
    var connection = new harmony_node_sdk_1.HarmonyConnection(defaultServer, resp.session);
})
    .catch(function (e) { return console.error(e.message); });
