import { Body, Controller, Post } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { CreateJobDto } from './dto/create.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Dummy Queues')
@Controller('dummy')
export class DummyController {
    constructor(private readonly dummyService: DummyService) { }

    @Post('queue1')
    @ApiOperation({ summary: 'Add a job to Queue 1' })
    @ApiResponse({ status: 201, description: 'Job successfully added to queue.' })
    async handleQueue1(@Body() body: CreateJobDto) {
        return this.dummyService.sendToQueue1(body);
    }

    @Post('queue2')
    @ApiOperation({ summary: 'Add a job to Queue 2' })
    @ApiResponse({ status: 201, description: 'Job successfully added to queue.' })
    async handleQueue2(@Body() body: CreateJobDto) {
        return this.dummyService.sendToQueue2(body);
    }

    @Post('queue3')
    @ApiOperation({ summary: 'Add a job to Queue 3' })
    @ApiResponse({ status: 201, description: 'Job successfully added to queue.' })
    async handleQueue3(@Body() body: CreateJobDto) {
        return this.dummyService.sendToQueue3(body);
    }
}
