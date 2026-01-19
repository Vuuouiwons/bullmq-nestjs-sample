import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { BullBoardModule } from '@bull-board/nestjs'; // [NEW]
import { ExpressAdapter } from '@bull-board/express'; // [NEW]
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter'; // [N

@Global()
@Module({
    imports: [
        BullModule.forRoot({
            connection: {
                host: 'localhost',
                port: 6379
            },
        }),
        BullModule.registerQueue(
            { name: 'queue1' },
            { name: 'queue2' },
            { name: 'queue3' },
        ),
        BullBoardModule.forFeature(
            { name: 'queue1', adapter: BullMQAdapter },
            { name: 'queue2', adapter: BullMQAdapter },
            { name: 'queue3', adapter: BullMQAdapter },
        ),
        BullBoardModule.forRoot({
            route: '/admin/queues',
            adapter: ExpressAdapter,
        }),
    ],
    providers: [
    ],
    // Export these so AppModule can see the Service and the Queue
    exports: [
        BullModule
    ],
})
export class BullmqModule { }
