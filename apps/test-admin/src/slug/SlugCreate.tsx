import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlugCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="desc" source="desc" />
        <TextInput label="iconUrl" source="iconUrl" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
