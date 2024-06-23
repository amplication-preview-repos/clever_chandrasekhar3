import { JsonValue } from "type-fest";

export type FormSubmission = {
  createdAt: Date;
  id: string;
  submissionData: JsonValue;
  updatedAt: Date;
  userEmail: string | null;
  userName: string | null;
};
