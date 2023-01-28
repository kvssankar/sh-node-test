import APISample from "../common/data/APISample";
interface Buffer {
    offer(apiSample: APISample): boolean;
    canOffer(): boolean;
    poll(): APISample | undefined;
    getContentCount(): number;
    clear(): boolean;
}
export default Buffer;
