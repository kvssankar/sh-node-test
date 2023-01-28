import URI from "../common/data/uri/URI";
import { HttpRequestMethod } from "../common/constant/ShortloopCommonConstant";
import ObservedApi from "../common/data/ObservedApi";
import ApiConfig from "../common/data/ApiConfig";
declare class ApiBufferKey {
    private uri;
    private method;
    constructor(uri: URI, method: HttpRequestMethod);
    static getApiBufferKeyFromObservedApi(observedApi: ObservedApi): ApiBufferKey;
    static getApiBufferKeyFromApiConfig(apiConfig: ApiConfig): ApiBufferKey;
    equals(object: Object): boolean;
    getUri(): URI;
    setUri(uri: URI): void;
    getMethod(): HttpRequestMethod;
    setMethod(method: HttpRequestMethod): void;
}
export default ApiBufferKey;
