import AgentConfig from "../common/data/AgentConfig";
interface ConfigUpdateListener {
    onSuccessfulConfigUpdate(agentConfig: AgentConfig): void;
    onErroneousConfigUpdate(): void;
}
export default ConfigUpdateListener;
