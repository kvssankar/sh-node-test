import AgentConfig from "../common/data/AgentConfig";
import ApiProcessor from "./ApiProcessor";
import configManager from "../config/ConfigManager";
import ConfigUpdateListener from "../config/ConfigUpdateListener";
declare class ShortloopNodeFilter implements ConfigUpdateListener {
    private agentConfig;
    private configManager;
    private apiProcessor;
    private readonly userApplicationName;
    constructor(configManager: configManager, apiProcessor: ApiProcessor, userApplicationName: string);
    init(): boolean;
    onErroneousConfigUpdate(): void;
    onSuccessfulConfigUpdate(agentConfig: AgentConfig): void;
    private getApiConfig;
    private getObservedApiFromRequest;
    processReqAndRes(req: any, res: any, next: Function): void;
    private isBlackListedApi;
}
export default ShortloopNodeFilter;
