import { CacheEntryWhereInput } from "./CacheEntryWhereInput";
import { CacheEntryOrderByInput } from "./CacheEntryOrderByInput";

export type CacheEntryFindManyArgs = {
  where?: CacheEntryWhereInput;
  orderBy?: Array<CacheEntryOrderByInput>;
  skip?: number;
  take?: number;
};
