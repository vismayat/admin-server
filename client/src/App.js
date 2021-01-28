import React from 'react';
import { Admin, Resource } from 'react-admin';
import restprovider from 'ra-data-simple-rest'; 
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';

function App() {
  return <Admin dataProvider={restprovider('http://localhost:3000')}>
    <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} />
  </Admin>
}


export default App; 
