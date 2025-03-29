import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { GuestsModule } from './guests/guests.module';
import { GiftsModule } from './gifts/gifts.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    EventsModule,
    GuestsModule,
    GiftsModule,
    AuthModule,
    UserModule
  ],
})

export class AppModule { }
