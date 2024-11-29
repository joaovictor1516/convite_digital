import { Module } from "@nestjs/common";
import { PrismaProvider } from "./prismaProvider";

@Module({
  providers: [PrismaProvider],
  exports: [PrismaProvider],
})
export class DbModule {}
