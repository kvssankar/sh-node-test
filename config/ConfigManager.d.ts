import ConfigUpdateListener from "./ConfigUpdateListener";
interface ConfigManager {
    init(): boolean;
    subscribeToUpdates(configUpdateListener: ConfigUpdateListener): boolean;
    shutdown(): boolean;
}
export default ConfigManager;
