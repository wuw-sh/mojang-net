import {HttpHeader} from "./HttpHeader";
import {HttpRequest} from "./HttpRequest";

export class HttpResponse {
    /**
     * Body content of the HTTP response.
     * @type string
     */
    readonly 'body': string;
    /**
     * A collection of HTTP response headers returned from the request.
     * @type HttpHeader[]
     */
    readonly 'headers': HttpHeader[];
    /**
     * Information that was used to formulate the HTTP response that this object represents.
     * @type HttpRequest
     */
    readonly 'request': HttpRequest;
    /**
     * HTTP response code for the request. For example, 404 represents resource not found, and 500 represents an internal server error.
     * @type number
     */
    readonly 'status': number;
}