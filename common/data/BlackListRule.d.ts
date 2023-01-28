import { HttpRequestMethod } from "../constant/ShortloopCommonConstant";
import URI from "./uri/URI";
export interface IBlackListRule {
    blackListType: string;
    matchValues: string[];
    method: HttpRequestMethod;
}
declare class BlackListRule {
    blackListType: string;
    matchValues: string[];
    method: HttpRequestMethod;
    constructor(data: IBlackListRule);
    isValid(): boolean;
    matchesUri(uri: URI, method: HttpRequestMethod): boolean;
    getBlackListType(): string;
    setBlackListType(blackListType: string): void;
    getMatchValues(): string[];
    setMatchValues(matchValues: string[]): void;
    getMethod(): HttpRequestMethod;
    setMethod(method: HttpRequestMethod): void;
}
export default BlackListRule;
