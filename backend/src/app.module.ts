import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { GuestsModule } from './guests/guests.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    EventsModule,
    GuestsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
