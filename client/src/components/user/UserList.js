import React from 'react';
import { Filter, List, TextInput, ReferenceInput, SelectInput, Datagrid, TextField, EmailField, EditButton, DeleteButton, DateField, ReferenceField, ShowButton } from 'react-admin';

const UserList = (props) => {



    return <List {...props}>


        <Datagrid>


            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source='phone' />
            <TextField source='department' />
            <TextField source='designation' />
            <DateField lable='created' source='createdAt' />
            <EditButton basePath='/users' />
            <DeleteButton basePath='/users' />

        </Datagrid>
    </List>
}

export default UserList;
