import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL');
        if (databaseUrl) {
          return {
            type: 'postgres',
            url: databaseUrl,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            logging: ['error', 'schema'],
            synchronize: configService.get<string>('NODE_ENV') === 'DEVELOPMENT',
            ssl: { rejectUnauthorized: false },
          };
        }
        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST') || 'localhost',
          port: configService.get<number>('DB_PORT') || 5432,
          database: configService.get<string>('DB_NAME'),
          username: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASSWORD'),
          entities: [__dirname + '/../**/*.entity{.ts,.js}'],
          logging: ['error', 'schema'],
          synchronize: configService.get<string>('NODE_ENV') === 'DEVELOPMENT',
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}