import { FormSubmission as TFormSubmission } from "../api/formSubmission/FormSubmission";

export const FORMSUBMISSION_TITLE_FIELD = "userName";

export const FormSubmissionTitle = (record: TFormSubmission): string => {
  return record.userName?.toString() || String(record.id);
};
