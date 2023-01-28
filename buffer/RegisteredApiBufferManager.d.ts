import AbstractBufferManager from "./AbstractBufferManager";
import ConfigManager from "../config/ConfigManager";
import AgentConfig from "../common/data/AgentConfig";
import BufferManagerWorker from "./BufferManagerWorker";
import ApiBufferKey from "./ApiBufferKey";
declare class RegisteredApiBufferManager extends AbstractBufferManager {
    private readonly ctUrl;
    constructor(configManager: ConfigManager, ctUrl: string);
    createWorker(agentConfig: AgentConfig): BufferManagerWorker<ApiBufferKey>;
}
export default RegisteredApiBufferManager;
