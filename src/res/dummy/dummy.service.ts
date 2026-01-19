import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class DummyService {
    constructor(
        @InjectQueue('queue1') private readonly queueOne: Queue,
        @InjectQueue('queue2') private readonly queueTwo: Queue,
        @InjectQueue('queue3') private readonly queueThree: Queue

    ) { }

    async sendToQueue1(data) {
        this.queueOne.add('queueOneJob', data);
        return {
            'status': 'queue 1 scheduled'
        }
    }

    async sendToQueue2(data) {
        this.queueTwo.add('queueTwoJob', data);
        return {
            'status': 'queue 2 scheduled'
        }
    }

    async sendToQueue3(data) {
        this.queueThree.add('queueThreeJob', data);
        return {
            'status': 'queue 3 scheduled'
        }
    }
}
