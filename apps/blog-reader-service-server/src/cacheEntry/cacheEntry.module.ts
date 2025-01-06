import { Module } from "@nestjs/common";
import { CacheEntryModuleBase } from "./base/cacheEntry.module.base";
import { CacheEntryService } from "./cacheEntry.service";
import { CacheEntryController } from "./cacheEntry.controller";
import { CacheEntryResolver } from "./cacheEntry.resolver";

@Module({
  imports: [CacheEntryModuleBase],
  controllers: [CacheEntryController],
  providers: [CacheEntryService, CacheEntryResolver],
  exports: [CacheEntryService],
})
export class CacheEntryModule {}
