import {SecretString} from 'mojang-minecraft-server-admin';

export declare class HttpHeader {
    /**
     * @param key
     * @param value
     * @returns HttpHeader
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
    constructor(key: string, value: SecretString | string);

    /**
     * Key of the HTTP header.
     */
    'key': string;
    /**
     * Value of the HTTP header.
     */
    'value': string;
}