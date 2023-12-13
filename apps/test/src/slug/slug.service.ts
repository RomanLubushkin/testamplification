import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlugServiceBase } from "./base/slug.service.base";

@Injectable()
export class SlugService extends SlugServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
