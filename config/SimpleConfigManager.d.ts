import ConfigManager from "./ConfigManager";
import ConfigUpdateListener from "./ConfigUpdateListener";
declare class SimpleConfigManager implements ConfigManager {
    private readonly ctUrl;
    private readonly userApplicationName;
    private configUpdateListeners;
    private executionerService;
    private readonly agentId;
    constructor(ctUrl: string, userApplicationName: string, agentId: string);
    subscribeToUpdates(configUpdateListener: ConfigUpdateListener): boolean;
    getUri(): string;
    init(): boolean;
    private scheduleConfigRefresh;
    private fetchConfigNotify;
    private onSuccessfulConfigFetch;
    private onUnSuccessfulConfigFetch;
    private fetchConfig;
    shutdown(): boolean;
}
export default SimpleConfigManager;
