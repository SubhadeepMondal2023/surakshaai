import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module'; // Add this import
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    BookingModule,
    AuthModule,
    DoctorModule, // Add this module to your imports array
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}