import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs';
import { ExpressAdapter } from '@bull-board/express';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { dummyQueue } from 'src/res/dummy/dummy.queue';

const QUEUES = [...dummyQueue];

@Global()
@Module({
    imports: [
        BullModule.forRoot({
            connection: {
                host: 'localhost',
                port: 6379
            },
        }),
        BullModule.registerQueue(...QUEUES.map(name => ({ name }))),
        BullBoardModule.forFeature(...QUEUES.map(name => ({ name, adapter: BullMQAdapter }))),
        BullBoardModule.forRoot({
            route: '/admin/queues',
            adapter: ExpressAdapter,
        }),
    ],
    providers: [
    ],
    exports: [
        BullModule
    ],
})
export class BullmqModule { }
