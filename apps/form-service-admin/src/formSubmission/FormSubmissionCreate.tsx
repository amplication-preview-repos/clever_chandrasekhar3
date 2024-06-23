import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FormSubmissionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="userEmail" source="userEmail" type="email" />
        <TextInput label="userName" source="userName" />
      </SimpleForm>
    </Create>
  );
};
