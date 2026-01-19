import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';

@Processor('queue1')
export class Queue1Processor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(`Queue1 Data: ${JSON.stringify(job.data)}`);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { sent: true };
  }
}

@Processor('queue2')
export class Queue2Processor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(`Queue2 Data: ${JSON.stringify(job.data)}`);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { sent: true };
  }
}

@Processor('queue3')
export class Queue3Processor extends WorkerHost {
  async process(job: Job<any, any, string>): Promise<any> {
    console.log(`Queue3 Data: ${JSON.stringify(job.data)}`);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return { sent: true };
  }
}