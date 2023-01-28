declare class HttpResponse {
    private headers;
    private body;
    private statusCode;
    constructor(headers: Object, statusCode: number);
    getHeaders(): Object;
    getBody(): any;
    setHeaders(headers: Object): void;
    setBody(body: any): void;
    getStatusCode(): number;
    setStatusCode(statusCode: number): void;
}
export default HttpResponse;
