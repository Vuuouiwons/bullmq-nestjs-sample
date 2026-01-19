import { DummyService } from './dummy.service';
import { CreateJobDto } from './dto/create.dto';
export declare class DummyController {
    private readonly dummyService;
    constructor(dummyService: DummyService);
    handleQueue1(body: CreateJobDto): Promise<{
        status: string;
    }>;
    handleQueue2(body: CreateJobDto): Promise<{
        status: string;
    }>;
    handleQueue3(body: CreateJobDto): Promise<{
        status: string;
    }>;
}
