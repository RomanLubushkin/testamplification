import { Module } from "@nestjs/common";
import { SlugModuleBase } from "./base/slug.module.base";
import { SlugService } from "./slug.service";
import { SlugController } from "./slug.controller";
import { SlugResolver } from "./slug.resolver";

@Module({
  imports: [SlugModuleBase],
  controllers: [SlugController],
  providers: [SlugService, SlugResolver],
  exports: [SlugService],
})
export class SlugModule {}
