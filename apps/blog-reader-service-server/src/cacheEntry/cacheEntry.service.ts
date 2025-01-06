import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CacheEntryServiceBase } from "./base/cacheEntry.service.base";

@Injectable()
export class CacheEntryService extends CacheEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
