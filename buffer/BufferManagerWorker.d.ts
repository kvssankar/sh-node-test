import APISample from "../common/data/APISample";
import ApiBufferKey from "./ApiBufferKey";
import AgentConfig from "../common/data/AgentConfig";
import BufferMap from "./BufferMap";
declare abstract class BufferManagerWorker<K> {
    abstract init(): boolean;
    abstract offer(key: K | ApiBufferKey, apiSample: APISample): boolean;
    abstract canOffer(key: K | ApiBufferKey): boolean;
    protected readonly bufferMap: BufferMap;
    private readonly agentConfig;
    private readonly bufferSyncExecutorService;
    protected readonly ctUrl: string | null;
    getOperatingConfig(): AgentConfig | null;
    protected constructor(agentConfig: AgentConfig | null, ctUrl: string | null);
    shutdown(): boolean;
    private cleanUpBufferMap;
    protected getUri(): string;
    abstract syncForKey(key: ApiBufferKey): void;
    private syncForKeys;
}
export default BufferManagerWorker;
