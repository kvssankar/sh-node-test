import SimpleBuffer from "./SimpleBuffer";
import ApiBufferKey from "./ApiBufferKey";
declare class BufferMap {
    private bufferMap;
    constructor();
    getBufferMap(): Map<ApiBufferKey, SimpleBuffer>;
    setBufferMap(bufferMap: Map<ApiBufferKey, SimpleBuffer>): void;
    getBuffer(apiBufferKey: ApiBufferKey): SimpleBuffer | undefined;
    computeIfAbsent(apiBufferKey: ApiBufferKey, buffer: SimpleBuffer): SimpleBuffer;
    delete(apiBufferKey: ApiBufferKey): boolean;
    clear(): void;
}
export default BufferMap;
