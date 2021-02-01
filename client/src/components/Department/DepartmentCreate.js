import React from 'react';
import { Create, SimpleForm, TextInput, DateInput, ImageField, ImageInput } from 'react-admin';

const DepartmentCreate = (props) => {
    return (
        <Create title='Create Users' {...props}>
            <SimpleForm>

                <TextInput source='DepartmentName' />
                <ImageInput source="pictures" label="Related pictures" minSize="15" accept="image/*" placeholder={<p>Drop your file here</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>

                <DateInput label='created' source='createdAt' />
            </SimpleForm>

        </Create>
    )
}
export default DepartmentCreate;