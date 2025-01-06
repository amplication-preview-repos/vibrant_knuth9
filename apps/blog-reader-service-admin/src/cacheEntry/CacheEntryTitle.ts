import { CacheEntry as TCacheEntry } from "../api/cacheEntry/CacheEntry";

export const CACHEENTRY_TITLE_FIELD = "id";

export const CacheEntryTitle = (record: TCacheEntry): string => {
  return record.id?.toString() || String(record.id);
};
