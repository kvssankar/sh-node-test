import BufferManagerWorker from "./BufferManagerWorker";
import AgentConfig from "../common/data/AgentConfig";
import APISample from "../common/data/APISample";
import ApiBufferKey from "./ApiBufferKey";
declare class NoOpBufferManagerWorker<K> extends BufferManagerWorker<K> {
    config: AgentConfig;
    constructor();
    init(): boolean;
    canOffer(key: ApiBufferKey | K): boolean;
    offer(key: ApiBufferKey | K, apiSample: APISample): boolean;
    offerByKey(key: K, apiSample: APISample): boolean;
    canOfferByKey(key: K): boolean;
    getOperatingConfig(): AgentConfig | null;
    offerByApiBufferKey(apiBufferKey: ApiBufferKey, apiSample: APISample): boolean;
    canOfferByApiBufferKey(apiBufferKey: ApiBufferKey): boolean;
    shutdown(): boolean;
    syncForKey(key: ApiBufferKey): void;
}
export default NoOpBufferManagerWorker;
