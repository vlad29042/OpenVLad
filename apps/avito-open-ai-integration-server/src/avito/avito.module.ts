import { Module } from "@nestjs/common";
import { AvitoService } from "./avito.service";
import { AvitoController } from "./avito.controller";
import { AvitoResolver } from "./avito.resolver";

@Module({
  controllers: [AvitoController],
  providers: [AvitoService, AvitoResolver],
  exports: [AvitoService],
})
export class AvitoModule {}
