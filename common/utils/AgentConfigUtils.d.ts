import AgentConfig from "../data/AgentConfig";
import ApiConfig from "../data/ApiConfig";
import URI from "../data/uri/URI";
import BlackListRule from "../data/BlackListRule";
declare class AgentConfigUtils {
    static isConfigValid(config: AgentConfig): boolean;
    static isBlackListRuleValid(blackListRule: BlackListRule): boolean;
    static isApiConfigValid(apiConfig: ApiConfig): boolean;
    static isURIValid(uri: URI): boolean;
}
export default AgentConfigUtils;
