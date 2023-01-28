import BufferManagerWorker from "./BufferManagerWorker";
import ApiBufferKey from "./ApiBufferKey";
import AgentConfig from "../common/data/AgentConfig";
import APISample from "../common/data/APISample";
declare class RegisteredApiBufferManagerWorker extends BufferManagerWorker<ApiBufferKey> {
    private readonly semaphore;
    constructor(config: AgentConfig, ctUrl: string);
    init(): boolean;
    offer(key: ApiBufferKey, apiSample: APISample): boolean;
    canOffer(key: ApiBufferKey): boolean;
    getRegisteredApiBufferSize(apiBufferKey: ApiBufferKey): number;
    getRegisteredApiCountToCapture(): number;
    syncForKey(key: ApiBufferKey): void;
}
export default RegisteredApiBufferManagerWorker;
