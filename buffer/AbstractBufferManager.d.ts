import ConfigUpdateListener from "../config/ConfigUpdateListener";
import ConfigManager from "../config/ConfigManager";
import BufferManagerWorker from "./BufferManagerWorker";
import ApiBufferKey from "./ApiBufferKey";
import AgentConfig from "../common/data/AgentConfig";
declare abstract class AbstractBufferManager implements ConfigUpdateListener {
    private readonly configManager;
    private readonly dummyWorker;
    private worker;
    protected constructor(configManager: ConfigManager);
    abstract createWorker(agentConfig: AgentConfig): BufferManagerWorker<ApiBufferKey>;
    onErroneousConfigUpdate(): void;
    onSuccessfulConfigUpdate(agentConfig: AgentConfig): void;
    init(): boolean;
    shutdown(): boolean;
    private isRefreshNeeded;
    getWorker(): BufferManagerWorker<ApiBufferKey> | null;
}
export default AbstractBufferManager;
