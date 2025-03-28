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
import { User } from "src/user/entities/user.entity";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService
    ) { }

    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOneBy({ email: loginDto.email });

        if (!user) {
            throw new UnauthorizedException("Credenciais inválidas.");
        }

        const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

        if (!isPasswordValid) {
            throw new UnauthorizedException("Credenciais inválidas.");
        }

        const token = this.generateToken({ id: user.id, email: user.email }); 
        const { name } = user;
        return { name, token };
    }

    generateToken(payload: { id: string; email: string }): string {
        return this.jwtService.sign(payload); 
    }

    async validateToken(token: string) {
        try {
            const validate = this.jwtService.verify(token, { secret: process.env.JWT_SECRET });
            return validate;
        } catch (error) {
            throw new UnauthorizedException("Invalid or expired token");
        }
    }
}
