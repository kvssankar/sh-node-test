import AbstractBufferManager from "./AbstractBufferManager";
import ConfigManager from "../config/ConfigManager";
import ApiBufferKey from "./ApiBufferKey";
import AgentConfig from "../common/data/AgentConfig";
import BufferManagerWorker from "./BufferManagerWorker";
declare class DiscoveredApiBufferManager extends AbstractBufferManager {
    private readonly ctUrl;
    constructor(configManager: ConfigManager, ctUrl: string);
    createWorker(agentConfig: AgentConfig): BufferManagerWorker<ApiBufferKey>;
}
export default DiscoveredApiBufferManager;
