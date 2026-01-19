import { Module } from '@nestjs/common';
import { DummyController } from './dummy.controller';
import { DummyService } from './dummy.service';
import { Queue1Processor, Queue2Processor, Queue3Processor } from './dummy.processor';

@Module({
    controllers: [
        DummyController
    ],
    providers: [
        DummyService,
        Queue1Processor,
        Queue2Processor,
        Queue3Processor
    ],
})
export class DummyModule { }