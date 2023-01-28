import ApiConfig, { IApiConfig } from "./ApiConfig";
import BlackListRule, { IBlackListRule } from "./BlackListRule";
interface IAgentConfig {
    bufferSyncFreqInSec: number;
    captureApiSample: boolean;
    configFetchFreqInSec: number;
    registeredApiConfigs: IApiConfig[];
    timestamp: Date;
    discoveryBufferSize: number;
    discoveryBufferSizePerApi: number;
    blackListRules: IBlackListRule[];
}
declare class AgentConfig {
    private bufferSyncFreqInSec;
    private captureApiSample;
    private configFetchFreqInSec;
    private registeredApiConfigs;
    private timestamp;
    private discoveryBufferSize;
    private discoveryBufferSizePerApi;
    private blackListRules;
    static readonly noOpAgentConfig: AgentConfig;
    constructor(agentConfig: IAgentConfig);
    getBufferSyncFreqInSec(): number;
    setBufferSyncFreqInSec(bufferSyncFreqInSec: number): void;
    getBlackListRules(): BlackListRule[];
    setBlackListRules(blackListRules: BlackListRule[]): void;
    getCaptureApiSample(): boolean;
    setCaptureApiSample(captureApiSample: boolean): void;
    getConfigFetchFreqInSec(): number;
    setConfigFetchFreqInSec(configFetchFreqInSec: number): void;
    getRegisteredApiConfigs(): ApiConfig[];
    setRegisteredApiConfigs(registeredApiConfigs: ApiConfig[]): void;
    getTimestamp(): Date;
    setTimestamp(timestamp: Date): void;
    getDiscoveryBufferSize(): number;
    setDiscoveryBufferSize(discoveryBufferSize: number): void;
    getDiscoveryBufferSizePerApi(): number;
    setDiscoveryBufferSizePerApi(discoveryBufferSizePerApi: number): void;
}
export default AgentConfig;
