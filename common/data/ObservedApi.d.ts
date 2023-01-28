import URI from "./uri/URI";
import { HttpRequestMethod } from "../constant/ShortloopCommonConstant";
import ApiConfig from "./ApiConfig";
declare class ObservedApi {
    private uri;
    private method;
    constructor(uri: string, method: HttpRequestMethod);
    getUri(): URI;
    getMethod(): HttpRequestMethod;
    setUri(uri: URI): void;
    setMethod(method: HttpRequestMethod): void;
    matches(apiConfig: ApiConfig): boolean;
}
export default ObservedApi;
