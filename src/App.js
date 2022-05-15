import React, { useState } from 'react';
import './App.css';
import UserTable from './gqlFunction/UserTable';
import { createNewUser, getUserByEmail,getUserBySupMail, deleteUserByMail, deleteUserBySupMail, updateUserInfo } from './gqlFunction/UserTable';
import WorkflowTable, { createNewNotif } from './gqlFunction/NotifTable';
import { createNewWorkflow,updateNotif,deleteNotifByMail } from './gqlFunction/NotifTable';

function App() {
  const createNotifData = {
    userNotificationsId:"xyz@gmail.com",
    NotificationStatus:'abc',
    NotificationContent:'String',
    NotifyTime:'String'
  };

  const updateNotifData={
    NotificationStatus:'avail',
    id:"b9998afd-1850-4101-83c3-1ecb251f2330",
    userNotificationsId:"b9998afd-1850-4101-83c3-1ecb251f2330",
    _version:"1"
  }

  const deleteNotif={
    id:"3e2f5dbe-8f8d-4cb7-86b9-67356fed7da3",
    _version: "1"
  }
  /*const createUserData = {
    email: "nifaz@gmail.com",
    name: "Nifaz",
    isAdmin: false,
    phone: "8888888888",
    superwiserEmail: "gourab131@gmail.com",
    isApproved: true,
    isEmailApproved: true,
    isPhoneVerified: true,
    isGooleSignIn: true,
    isFacebookSignIn: false,
    isGeneralAuthSignIn: false
  };
  const getDataViaMail = {
    email: "abcd@gmail.com"
  }
  const getDataViaSuper = {
    superwiserEmail: "gourab@gmail.com"
  }
  const deleteEmail = {
    email: "neil@gmail.com",
    _version: "1"
  }
  const deleteSuperMail = {
    superwiserEmail: "gourab@gmail.com",
    _version: "1"
  }
  const updateTheUser = {
    email: "xyz@gmail.com",
    name: "anuj",
    isAdmin: true,
    _version: "9"
  }*/

  return (
    <div className="App">
      {/* <button onClick={() => createNewUser(createUserData)}>Create new user</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaMail.email)}>Get user by email</button><br/><br/>
      <button onClick={() => getUserBySupMail(getDataViaSuper.superwiserEmail)}>Get user by supermail</button><br/><br/>
      <button onClick={() => deleteUserByMail(deleteEmail)}>Delete by email</button><br/><br/>
      <button onClick={() => deleteUserBySupMail(deleteSuperMail.superwiserEmail)}>Delete by supermail</button><br/><br/>
      
      <button onClick={() => updateUserInfo(updateTheUser)}>Update User</button><br/><br/> */}
      <button onClick={() => createNewNotif(createNotifData)}>Create new notif</button><br/><br/>
      <button onClick={() => updateNotif(updateNotifData)}>Update notif </button><br/><br/>
      <button onClick={() => deleteNotifByMail(deleteNotif)}>Delete notif </button><br/><br/>


    </div>
  );
}

export default App;


//  const[mail, setMail] = useState(null)
//  const callingFunction = userByEmail(mail)