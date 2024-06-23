import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FormSubmissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FormSubmissions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="submissionData" source="submissionData" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userEmail" source="userEmail" />
        <TextField label="userName" source="userName" />
      </Datagrid>
    </List>
  );
};
