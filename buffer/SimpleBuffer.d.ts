import Buffer from "./Buffer";
import APISample from "../common/data/APISample";
declare class SimpleBuffer implements Buffer {
    private arrayBlockingQueue;
    private readonly size;
    constructor(capacity: number);
    offer(apiSample: APISample): boolean;
    canOffer(): boolean;
    poll(): APISample | undefined;
    getContentCount(): number;
    clear(): boolean;
}
export default SimpleBuffer;
