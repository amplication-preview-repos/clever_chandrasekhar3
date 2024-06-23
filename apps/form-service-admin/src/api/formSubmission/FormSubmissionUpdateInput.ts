import { InputJsonValue } from "../../types";

export type FormSubmissionUpdateInput = {
  submissionData?: InputJsonValue;
  userEmail?: string | null;
  userName?: string | null;
};
