import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AvitoService } from "./avito.service";

@swagger.ApiTags("avitos")
@common.Controller("avitos")
export class AvitoController {
  constructor(protected readonly service: AvitoService) {}
}
