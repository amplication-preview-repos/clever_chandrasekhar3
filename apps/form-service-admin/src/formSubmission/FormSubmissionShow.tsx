import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const FormSubmissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="submissionData" source="submissionData" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userEmail" source="userEmail" />
        <TextField label="userName" source="userName" />
      </SimpleShowLayout>
    </Show>
  );
};
