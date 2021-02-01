import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput, lable, ImageField, ImageInput } from 'react-admin';

const DepartmentEdit = (props) => {
    return (
        <Edit title='Edit Department' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='DepartmentName' />
                <ImageInput source="pictures" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>

            </SimpleForm>

        </Edit>
    )
}
export default DepartmentEdit;