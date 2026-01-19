import { Queue } from 'bullmq';
export declare class MailProducerService {
    private readonly mailQueue;
    constructor(mailQueue: Queue);
    sendWelcomeEmail(email: string): Promise<{
        status: string;
    }>;
}
