import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { AuthModule } from './auth/auth.module'; // Add this import

@Module({
  imports: [
    BookingModule,
    AuthModule, // Add this module to your imports array
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}