import {HttpHeader} from "./HttpHeader";
import {HttpRequestMethod} from "./HttpRequestMethod";

export declare class HttpRequest {
    /**
     * @param uri
     * @returns HttpRequest
     * @example
     * const req = new mcnet.HttpRequest("http://localhost:3000/updateScore");
     *   req.body = JSON.stringify({
     *     score: 22,
     *   });
     *   req.method = mcnet.HttpRequestMethod.POST;
     *   req.headers = [
     *     new mcnet.HttpHeader("Content-Type", "application/json"),
     *     new mcnet.HttpHeader("auth", "my-auth-token"),
     *   ];
     *   const response: any = await mcnet.http.request(req);
     */
    constructor(uri: string)

    /**
     * Content of the body of the HTTP request.
     * @type string
     */
    'body': string;
    /**
     * A collection of HTTP headers to add to the outbound request.
     * @type HttpHeader[]
     */
    'headers': HttpHeader[];
    /**
     * HTTP method (e.g., GET or PUT or PATCH) to use for making the request.
     * @type HttpRequestMethod
     */
    'method': HttpRequestMethod;
    /**
     * Amount of time, in seconds, before the request times out and is abandoned.
     * @type number
     */
    'timeout': number;
    /**
     * The HTTP resource to access.
     * @type string
     */
    'uri': string;

    /**
     * Adds an additional header to the overall list of headers used in the corresponding HTTP request.
     * @param key
     * @param value
     * @returns HttpRequest
     */
    addHeader(key: string, value: string): HttpRequest

    /**
     * @param body
     * @returns HttpRequest
     */
    setBody(body: string): HttpRequest

    /**
     * Replaces and applies a set of HTTP Headers for the request.
     * @param headers
     * @returns HttpRequest
     */
    setHeaders(headers: HttpHeader[]): HttpRequest

    /**
     * @param method
     * @returns HttpRequest
     */
    setMethod(method: HttpRequestMethod): HttpRequest

    /**
     * @param timeout
     * @returns HttpRequest
     */
    setTimeout(timeout: number): HttpRequest
}