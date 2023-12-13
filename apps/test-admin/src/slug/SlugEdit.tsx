import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SlugEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="desc" source="desc" />
        <TextInput label="iconUrl" source="iconUrl" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
