import * as graphql from "@nestjs/graphql";
import { CacheEntryResolverBase } from "./base/cacheEntry.resolver.base";
import { CacheEntry } from "./base/CacheEntry";
import { CacheEntryService } from "./cacheEntry.service";

@graphql.Resolver(() => CacheEntry)
export class CacheEntryResolver extends CacheEntryResolverBase {
  constructor(protected readonly service: CacheEntryService) {
    super(service);
  }
}
