import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FormSubmissionWhereInput = {
  id?: StringFilter;
  submissionData?: JsonFilter;
  userEmail?: StringNullableFilter;
  userName?: StringNullableFilter;
};
