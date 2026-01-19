import { Module } from '@nestjs/common';
import { BullmqModule } from './bullmq/bullmq.module';
import { DummyModule } from './res/dummy/dummy.module';

@Module({
  imports: [
    BullmqModule,
    DummyModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }