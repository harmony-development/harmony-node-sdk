declare type GetParams = {
    [key: string]: any;
} | null;
export declare class ReqHelper {
    static get<T>(url: string, params: GetParams): Promise<T>;
    static post<T>(url: string, args: GetParams, body: any): Promise<T>;
    static put<T>(url: string, args: GetParams, body: any): Promise<T>;
    static patch<T>(url: string, args: GetParams, body: any): Promise<T>;
    static delete<T>(url: string, args: GetParams): Promise<T>;
    static http<T>(method: string, rawURL: string, params: GetParams, body: any | null): Promise<T>;
}
export {};
