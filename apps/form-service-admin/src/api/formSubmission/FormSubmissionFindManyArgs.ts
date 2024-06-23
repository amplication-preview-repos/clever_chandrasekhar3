import { FormSubmissionWhereInput } from "./FormSubmissionWhereInput";
import { FormSubmissionOrderByInput } from "./FormSubmissionOrderByInput";

export type FormSubmissionFindManyArgs = {
  where?: FormSubmissionWhereInput;
  orderBy?: Array<FormSubmissionOrderByInput>;
  skip?: number;
  take?: number;
};
