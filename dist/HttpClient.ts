import {HttpResponse} from "./HttpResponse";
import {HttpRequest} from "./HttpRequest";

export declare class HttpClient {
    /**
     * @param reason The reason for cancelling the request.
     */
    cancelAll(reason: string): void

    /**
     * Performs a simple HTTP get request.
     * @param uri URL to make an HTTP Request to.
     * @return Returns Promise<HttpResponse> - An awaitable promise that contains the HTTP response.
     */
    get(uri: string): Promise<HttpResponse>

    /**
     * Performs an HTTP request.
     * @param config Contains an HTTP Request object with configuration data on the HTTP request.
     * @returns Promise<HttpResponse> - An awaitable promise that contains the HTTP response.
     */
    request(config: HttpRequest): Promise<HttpResponse>
}