import { Slug as TSlug } from "../api/slug/Slug";

export const SLUG_TITLE_FIELD = "name";

export const SlugTitle = (record: TSlug): string => {
  return record.name?.toString() || String(record.id);
};
