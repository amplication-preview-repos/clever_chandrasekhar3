import { SortOrder } from "../../util/SortOrder";

export type FormSubmissionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  submissionData?: SortOrder;
  updatedAt?: SortOrder;
  userEmail?: SortOrder;
  userName?: SortOrder;
};
