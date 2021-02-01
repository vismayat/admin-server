import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

const UserEdit = (props) => {
    return (
        <Edit title='Edit Users' {...props}>
            <SimpleForm>

                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='department' />
                <TextInput source='designation' />
                <DateInput lable='created' source='createdAt' />
            </SimpleForm>

        </Edit>
    )
}
export default UserEdit;