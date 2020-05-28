import fetch, { Headers } from "node-fetch";

type GetParams = {
  [key: string]: any;
} | null;

export class ReqHelper {
  static async get<T>(url: string, params: GetParams, authorization?: string) {
    return this.http<T>("GET", url, params, null);
  }

  static async post<T>(
    url: string,
    args: GetParams,
    body: any,
    authorization?: string
  ) {
    return await this.http<T>("POST", url, args, body);
  }

  static async put<T>(
    url: string,
    args: GetParams,
    body: any,
    authorization?: string
  ) {
    return await this.http<T>("PUT", url, args, body);
  }

  static async patch<T>(
    url: string,
    args: GetParams,
    body: any,
    authorization?: string
  ) {
    return await this.http<T>("PATCH", url, args, body);
  }

  static async delete<T>(url: string, args: GetParams, authorization?: string) {
    return await this.http<T>("DELETE", url, args, null, authorization);
  }

  static async http<T>(
    method: string,
    rawURL: string,
    params: GetParams,
    body: any | null,
    authorization?: string
  ) {
    const headers = new Headers();
    if (authorization) {
      headers.set("Authorization", authorization);
    }
    const url = new URL(rawURL);
    if (params) {
      Object.keys(params).forEach((param) => {
        url.searchParams.set(param, params[param]);
      });
    }
    if (body && !(body instanceof FormData)) {
      body = JSON.stringify(body);
      headers.set("Content-Type", "application/json");
    }
    const response = await fetch(url.toString(), {
      body,
      headers,
      method,
    });
    const data = await response.json();
    if (data.message && !response.ok) {
      throw new Error(JSON.stringify(data));
    }
    return data as T;
  }
}
