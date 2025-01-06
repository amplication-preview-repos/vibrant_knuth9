import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CacheEntryService } from "./cacheEntry.service";
import { CacheEntryControllerBase } from "./base/cacheEntry.controller.base";

@swagger.ApiTags("cacheEntries")
@common.Controller("cacheEntries")
export class CacheEntryController extends CacheEntryControllerBase {
  constructor(protected readonly service: CacheEntryService) {
    super(service);
  }
}
