import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SlugWhereInput = {
  desc?: StringNullableFilter;
  iconUrl?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
