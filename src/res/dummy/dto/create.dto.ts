import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
    @ApiProperty({ example: 'hello_i_am_baymax!', description: 'Any data' })
    data: any;

    @ApiProperty({ example: { foo: 'bar' }, description: 'Additional metadata' })
    metadata: any;
}