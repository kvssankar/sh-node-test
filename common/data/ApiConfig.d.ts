import { HttpRequestMethod } from "../constant/ShortloopCommonConstant";
import URI, { IURI } from "./uri/URI";
export interface IApiConfig {
    uri: IURI;
    bufferSize: number;
    method: HttpRequestMethod;
    captureSampleRequest: boolean;
    captureSampleResponse: boolean;
}
declare class ApiConfig {
    private uri;
    private bufferSize;
    private method;
    private captureSampleRequest;
    private captureSampleResponse;
    constructor(apiConfig: IApiConfig);
    getUri(): URI;
    setUri(uri: URI): void;
    getBufferSize(): number;
    setBufferSize(bufferSize: number): void;
    getMethod(): HttpRequestMethod;
    setMethod(method: HttpRequestMethod): void;
    getCaptureSampleRequest(): boolean;
    setCaptureSampleRequest(captureSampleRequest: boolean): void;
    getCaptureSampleResponse(): boolean;
    setCaptureSampleResponse(captureSampleResponse: boolean): void;
}
export default ApiConfig;
