import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ConfigurationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="automationEnabled" source="automationEnabled" />
        <TextInput label="googleSheetID" source="googleSheetId" />
      </SimpleForm>
    </Create>
  );
};
