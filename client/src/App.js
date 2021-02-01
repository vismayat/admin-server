import React from 'react';
import { Admin, Resource } from 'react-admin';

import restprovider from 'ra-data-simple-rest';

import UserIcon from '@material-ui/icons/Group';
import { UserList, UserCreate, UserEdit, DepartmentCreate, DepartmentEdit, DepartmentList } from './components';
import Dashboard from './Dashboard';
import MyLoginPage from './MyLoginPage';
import MyLogoutButton from './MyLogoutButton';


function App() {
  return <Admin dashboard={Dashboard} loginPage={MyLoginPage} logoutButton={MyLogoutButton} dataProvider={restprovider('http://localhost:3000')}>

    <Resource name='users' list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon} />

    <Resource name='department' list={DepartmentList} create={DepartmentCreate} edit={DepartmentEdit} />
  </Admin>
}


export default App; 
