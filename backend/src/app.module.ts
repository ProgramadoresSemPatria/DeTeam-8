import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { EventsModule } from './events/events.module';
import { GuestsModule } from './guests/guests.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CatalogModule } from './catalog/catalog.module';
import { WishListModule } from './wish-list/wish-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    EventsModule,
    GuestsModule,
    AuthModule,
    UserModule,
    CatalogModule,
    WishListModule,
  ],
})

export class AppModule { }
