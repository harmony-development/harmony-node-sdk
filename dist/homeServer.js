"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeServer = exports.Kit = void 0;
var Kit;
(function (Kit) {
    Kit["CORE"] = "core";
})(Kit = exports.Kit || (exports.Kit = {}));
var HomeServer = /** @class */ (function () {
    function HomeServer(ip, settings) {
        this.ip = ip;
        this.settings = settings;
    }
    HomeServer.prototype.toURL = function () {
        var _a, _b;
        var url = new URL(this.ip);
        url.protocol = ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.SSL) ? "https:" : "http:";
        url.port = ((_b = this.settings) === null || _b === void 0 ? void 0 : _b.port) || "";
        return url;
    };
    HomeServer.prototype.API = function (kit, version, path) {
        var _a, _b;
        var url = new URL(this.ip);
        url.protocol = ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.SSL) ? "https:" : "http:";
        url.port = ((_b = this.settings) === null || _b === void 0 ? void 0 : _b.port) || "";
        url.pathname = "/api/" + kit + "/v" + version + "/" + path;
        return url;
    };
    return HomeServer;
}());
exports.HomeServer = HomeServer;
