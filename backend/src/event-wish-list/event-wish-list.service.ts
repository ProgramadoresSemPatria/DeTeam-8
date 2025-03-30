import { Injectable } from '@nestjs/common';
import { CreateEventWishListDto } from './dto/create-event-wish-list.dto';
import { UpdateEventWishListDto } from './dto/update-event-wish-list.dto';

@Injectable()
export class EventWishListService {
  create(createEventWishListDto: CreateEventWishListDto) {
    return 'This action adds a new eventWishList';
  }

  findAll() {
    return `This action returns all eventWishList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventWishList`;
  }

  update(id: number, updateEventWishListDto: UpdateEventWishListDto) {
    return `This action updates a #${id} eventWishList`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventWishList`;
  }
}
