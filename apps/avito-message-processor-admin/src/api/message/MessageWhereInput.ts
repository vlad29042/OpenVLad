import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  sender?: StringNullableFilter;
  status?: StringNullableFilter;
};
