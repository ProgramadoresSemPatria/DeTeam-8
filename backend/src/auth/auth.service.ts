import {
    BadRequestException,
    ConflictException,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import { InjectRepository } from "@nestjs/typeorm";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ) { }
}
