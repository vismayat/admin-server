import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin';

const UserCreate = (props) => {
    return (
        <Create title='Create Users' {...props}>
            <SimpleForm redirect="show">


                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput source='phone' />
                <TextInput source='department' />
                <TextInput source='designation' />
                <DateInput label='created' source='createdAt' />
            </SimpleForm>

        </Create>
    )
}
export default UserCreate;
