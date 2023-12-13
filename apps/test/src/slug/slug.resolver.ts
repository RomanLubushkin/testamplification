import * as graphql from "@nestjs/graphql";
import { SlugResolverBase } from "./base/slug.resolver.base";
import { Slug } from "./base/Slug";
import { SlugService } from "./slug.service";

@graphql.Resolver(() => Slug)
export class SlugResolver extends SlugResolverBase {
  constructor(protected readonly service: SlugService) {
    super(service);
  }
}
