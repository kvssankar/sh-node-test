declare class HttpResponse {
    private headers;
    private body;
    private statusCode;
    constructor(headers: any, statusCode: number);
    getHeaders(): any;
    getBody(): any;
    setHeaders(headers: any): void;
    setBody(body: any): void;
    getStatusCode(): number;
    setStatusCode(statusCode: number): void;
}
export default HttpResponse;
