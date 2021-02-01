import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton, DateField, ImageField, ImageInput } from 'react-admin';

const DepartmentList = (props) => {
    return <List {...props}>
        <Datagrid>

            <TextField source="id" />
            <TextField source='DepartmentName' />

            <ImageField source="pictures" title="title" />


            <EditButton basePath='/Department' />




        </Datagrid>
    </List>
}

export default DepartmentList;