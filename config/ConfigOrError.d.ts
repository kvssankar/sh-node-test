import AgentConfig from "../common/data/AgentConfig";
import { ConfigErrorCode } from "../common/constant/ShortloopCommonConstant";
declare class ConfigOrError {
    agentConfig: AgentConfig | undefined;
    errorCode: ConfigErrorCode | undefined;
    constructor(agentConfig: AgentConfig | null, errorCode: ConfigErrorCode | null);
}
export default ConfigOrError;
