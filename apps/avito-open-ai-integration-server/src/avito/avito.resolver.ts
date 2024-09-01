import * as graphql from "@nestjs/graphql";
import { AvitoService } from "./avito.service";

export class AvitoResolver {
  constructor(protected readonly service: AvitoService) {}
}
