import { Module } from '@nestjs/common';
import { EventWishListService } from './event-wish-list.service';
import { EventWishListController } from './event-wish-list.controller';

@Module({
  controllers: [EventWishListController],
  providers: [EventWishListService],
})
export class EventWishListModule {}
