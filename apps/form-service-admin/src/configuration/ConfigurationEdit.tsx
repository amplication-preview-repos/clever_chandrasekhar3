import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ConfigurationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="automationEnabled" source="automationEnabled" />
        <TextInput label="googleSheetID" source="googleSheetId" />
      </SimpleForm>
    </Edit>
  );
};
