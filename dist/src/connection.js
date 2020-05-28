"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarmonyConnection = exports.SocketEvent = void 0;
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var ws_1 = __importDefault(require("ws"));
var SocketEvent;
(function (SocketEvent) {
    SocketEvent["SOCKET_CLOSE"] = "socket_close";
    SocketEvent["SOCKET_ERROR"] = "socket_error";
    SocketEvent["SOCKET_OPEN"] = "socket_open";
    SocketEvent["MESSAGE"] = "message";
})(SocketEvent = exports.SocketEvent || (exports.SocketEvent = {}));
var HarmonyConnection = /** @class */ (function () {
    function HarmonyConnection(server, session) {
        this.server = server;
        this.session = session;
        this.ws = new ws_1.default(server.getSocketPath().toString());
        this.events = new eventemitter3_1.default();
        this.bindEvents();
    }
    HarmonyConnection.prototype.reconnect = function () {
        this.ws = new ws_1.default(this.server.getSocketPath().toString());
        this.bindEvents();
    };
    HarmonyConnection.prototype.bindEvents = function () {
        var _this = this;
        this.ws.addEventListener("message", function (ev) {
            var parsed = JSON.parse(ev.data);
            _this.events.emit(parsed["message"], parsed["data"]);
        });
        this.ws.addEventListener("close", function (ev) {
            return _this.events.emit(SocketEvent.SOCKET_CLOSE, ev);
        });
        this.ws.addEventListener("open", function (ev) {
            return _this.events.emit(SocketEvent.SOCKET_OPEN, ev);
        });
    };
    return HarmonyConnection;
}());
exports.HarmonyConnection = HarmonyConnection;
