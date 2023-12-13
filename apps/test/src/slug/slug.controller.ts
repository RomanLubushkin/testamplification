import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SlugService } from "./slug.service";
import { SlugControllerBase } from "./base/slug.controller.base";

@swagger.ApiTags("slugs")
@common.Controller("slugs")
export class SlugController extends SlugControllerBase {
  constructor(protected readonly service: SlugService) {
    super(service);
  }
}
