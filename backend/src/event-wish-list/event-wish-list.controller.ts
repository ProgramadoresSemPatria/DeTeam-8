import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventWishListService } from './event-wish-list.service';
import { CreateEventWishListDto } from './dto/create-event-wish-list.dto';
import { UpdateEventWishListDto } from './dto/update-event-wish-list.dto';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('event-wish-list')
export class EventWishListController {
  constructor(private readonly eventWishListService: EventWishListService) {}

  @Post()
  create(@Body() createEventWishListDto: CreateEventWishListDto) {
    return this.eventWishListService.create(createEventWishListDto);
  }

  @Get()
  findAll() {
    return this.eventWishListService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventWishListService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventWishListDto: UpdateEventWishListDto) {
    return this.eventWishListService.update(+id, updateEventWishListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventWishListService.remove(+id);
  }
}
