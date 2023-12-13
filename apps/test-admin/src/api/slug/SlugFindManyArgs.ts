import { SlugWhereInput } from "./SlugWhereInput";
import { SlugOrderByInput } from "./SlugOrderByInput";

export type SlugFindManyArgs = {
  where?: SlugWhereInput;
  orderBy?: Array<SlugOrderByInput>;
  skip?: number;
  take?: number;
};
