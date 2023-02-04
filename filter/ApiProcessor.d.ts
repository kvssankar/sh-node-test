import RequestResponseContext from "./RequestResponseContext";
import RegisteredApiBufferManager from "../buffer/RegisteredApiBufferManager";
import DiscoveredApiBufferManager from "../buffer/DiscoveredApiBufferManager";
declare class ApiProcessor {
    private readonly registeredApiBufferManager;
    private readonly discoveredApiBufferManager;
    constructor(registeredApiBufferManager: RegisteredApiBufferManager, discoveredApiBufferManager: DiscoveredApiBufferManager);
    processDiscoveredApi(context: RequestResponseContext, res: any, next: Function): void;
    processRegisteredApi(context: RequestResponseContext, req: any, res: any, next: Function): void;
    private tryOffering;
    private shouldCaptureRequest;
    private shouldCaptureResponse;
    private getBufferEntryForApiSample;
}
export default ApiProcessor;
