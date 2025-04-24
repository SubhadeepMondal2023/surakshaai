import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class TimeSlotDto {
  @ApiProperty()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  endTime: Date;

  @ApiProperty()
  @IsNotEmpty()
  dayOfWeek: number;
}

export class AvailabilityDto {
  @ApiProperty({ type: [TimeSlotDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TimeSlotDto)
  slots: TimeSlotDto[];
}