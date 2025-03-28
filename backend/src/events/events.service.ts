import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EventEntity } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventEntity)
    private readonly eventRepository: Repository<EventEntity>,
  ) { }

  async create(createEventDto: CreateEventDto): Promise<EventEntity> {
    const event = this.eventRepository.create(createEventDto);

    return await this.eventRepository.save(event);
  }

  async findAll(): Promise<EventEntity[]> {
    return await this.eventRepository.find();
  }

  async findOne(id: string) {
    return await this.eventRepository.findOne({ where: { id } });
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    await this.eventRepository.update(id, updateEventDto);

    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
