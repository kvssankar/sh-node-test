"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigErrorCode = exports.ContentType = exports.HttpRequestMethod = exports.DataCategory = exports.DataSizeUnit = exports.ShortloopCommonConstant = void 0;
class ShortloopCommonConstant {
}
exports.ShortloopCommonConstant = ShortloopCommonConstant;
ShortloopCommonConstant.DATA_CATEGORY_MESSAGE_ATTRIBUTE_KEY = "DATA_CATEGORY";
ShortloopCommonConstant.CONTENT_TYPE_HEADER_LOWER_CASE = "content-type";
ShortloopCommonConstant.CONTENT_TYPE_HEADER_JSON_VALUE = "application/json";
ShortloopCommonConstant.MASKING_RULES_CONFIGURATION_NAME = "PIIMaskingRules";
ShortloopCommonConstant.DEFAULT_MASK_REPLACEMENT = "MASKED";
ShortloopCommonConstant.MASKED_VALUE_SUFFIX = "SL_MASK";
var DataSizeUnit;
(function (DataSizeUnit) {
    DataSizeUnit["KB"] = "KB";
    DataSizeUnit["MB"] = "MB";
    DataSizeUnit["GB"] = "GB";
})(DataSizeUnit = exports.DataSizeUnit || (exports.DataSizeUnit = {}));
var DataCategory;
(function (DataCategory) {
    DataCategory["SAMPLE_DATA"] = "SAMPLE_DATA";
})(DataCategory = exports.DataCategory || (exports.DataCategory = {}));
var HttpRequestMethod;
(function (HttpRequestMethod) {
    HttpRequestMethod["GET"] = "GET";
    HttpRequestMethod["HEAD"] = "HEAD";
    HttpRequestMethod["POST"] = "POST";
    HttpRequestMethod["PUT"] = "PUT";
    HttpRequestMethod["PATCH"] = "PATCH";
    HttpRequestMethod["DELETE"] = "DELETE";
    HttpRequestMethod["OPTIONS"] = "OPTIONS";
    HttpRequestMethod["TRACE"] = "TRACE";
})(HttpRequestMethod = exports.HttpRequestMethod || (exports.HttpRequestMethod = {}));
var ContentType;
(function (ContentType) {
    ContentType["JSON"] = "application/json";
    ContentType["TEXT"] = "text/plain";
    ContentType["UNKNOWN"] = "unknown";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var ConfigErrorCode;
(function (ConfigErrorCode) {
    ConfigErrorCode["TIMEOUT"] = "TIMEOUT";
    ConfigErrorCode["PARSE_ERROR"] = "PARSE_ERROR";
    ConfigErrorCode["INVALID_CONFIG"] = "INVALID_CONFIG";
})(ConfigErrorCode = exports.ConfigErrorCode || (exports.ConfigErrorCode = {}));
