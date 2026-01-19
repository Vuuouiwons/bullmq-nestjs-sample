import { Queue } from 'bullmq';
export declare class DummyService {
    private readonly queueOne;
    private readonly queueTwo;
    private readonly queueThree;
    constructor(queueOne: Queue, queueTwo: Queue, queueThree: Queue);
    sendToQueue1(data: any): Promise<{
        status: string;
    }>;
    sendToQueue2(data: any): Promise<{
        status: string;
    }>;
    sendToQueue3(data: any): Promise<{
        status: string;
    }>;
}
