import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
export declare class Queue1Processor extends WorkerHost {
    process(job: Job<any, any, string>): Promise<any>;
}
export declare class Queue2Processor extends WorkerHost {
    process(job: Job<any, any, string>): Promise<any>;
}
export declare class Queue3Processor extends WorkerHost {
    process(job: Job<any, any, string>): Promise<any>;
}
