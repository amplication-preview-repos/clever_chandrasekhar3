import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ConfigurationWhereInput = {
  automationEnabled?: BooleanNullableFilter;
  googleSheetId?: StringNullableFilter;
  id?: StringFilter;
};
