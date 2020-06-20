import 'isomorphic-fetch';

type GetParams = {
  [key: string]: any;
} | null;

interface RequestSettings {
  params?: GetParams;
  body?: any;
  authorization?: string;
}

export class ReqHelper {
  static async get<T>(url: URL, settings: RequestSettings) {
    return this.http<T>('GET', url, settings);
  }

  static async post<T>(url: URL, settings: RequestSettings) {
    return this.http<T>('POST', url, settings);
  }

  static async put<T>(url: URL, settings: RequestSettings) {
    return this.http<T>('PUT', url, settings);
  }

  static async patch<T>(url: URL, settings: RequestSettings) {
    return this.http<T>('PATCH', url, settings);
  }

  static async delete<T>(url: URL, settings: RequestSettings) {
    return this.http<T>('DELETE', url, settings);
  }

  static async http<T>(method: string, url: URL, settings: RequestSettings) {
    const headers = new Headers();
    if (settings.authorization) {
      headers.set('Authorization', settings.authorization);
    }
    if (settings.params) {
      Object.keys(settings.params).forEach((param) => {
        url.searchParams.set(param, settings.params![param]);
      });
    }
    if (settings.body && !(settings.body instanceof FormData)) {
      settings.body = JSON.stringify(settings.body);
      headers.set('Content-Type', 'application/json');
    }
    const response = await fetch(url.toString(), {
      body: settings.body,
      headers,
      method,
    });
    const data = await response.json();
    if (data.message && !response.ok) {
      throw new Error(data);
    }
    return data as T;
  }
}
