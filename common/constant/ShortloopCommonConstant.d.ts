export declare class ShortloopCommonConstant {
    static readonly DATA_CATEGORY_MESSAGE_ATTRIBUTE_KEY = "DATA_CATEGORY";
    static readonly CONTENT_TYPE_HEADER_LOWER_CASE = "content-type";
    static readonly CONTENT_TYPE_HEADER_JSON_VALUE = "application/json";
    static readonly MASKING_RULES_CONFIGURATION_NAME = "PIIMaskingRules";
    static readonly DEFAULT_MASK_REPLACEMENT = "MASKED";
    static readonly MASKED_VALUE_SUFFIX = "SL_MASK";
}
export declare enum DataSizeUnit {
    KB = "KB",
    MB = "MB",
    GB = "GB"
}
export declare enum DataCategory {
    SAMPLE_DATA = "SAMPLE_DATA"
}
export declare enum HttpRequestMethod {
    GET = "GET",
    HEAD = "HEAD",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
    OPTIONS = "OPTIONS",
    TRACE = "TRACE"
}
export declare enum ContentType {
    JSON = "application/json",
    TEXT = "text/plain",
    UNKNOWN = "unknown"
}
export declare enum ConfigErrorCode {
    TIMEOUT = "TIMEOUT",
    PARSE_ERROR = "PARSE_ERROR",
    INVALID_CONFIG = "INVALID_CONFIG"
}
