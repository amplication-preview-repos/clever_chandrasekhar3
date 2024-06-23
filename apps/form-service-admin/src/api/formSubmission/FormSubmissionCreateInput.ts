import { InputJsonValue } from "../../types";

export type FormSubmissionCreateInput = {
  submissionData?: InputJsonValue;
  userEmail?: string | null;
  userName?: string | null;
};
