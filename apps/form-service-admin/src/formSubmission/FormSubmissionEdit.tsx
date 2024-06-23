import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FormSubmissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="userEmail" source="userEmail" type="email" />
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Edit>
  );
};
