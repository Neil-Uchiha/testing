import React, { useState } from 'react';
import './App.css';
import UserTable from './gqlFunction/UserTable';
import { createNewUser, getUserByEmail,getUserBySupMail, deleteUserByMail, deleteUserBySupMail, updateUserInfo } from './gqlFunction/UserTable';
import WorkflowTable, { createNewNotif } from './gqlFunction/NotifTable';
import { createNewWorkflow,updateNotif,deleteNotifByMail } from './gqlFunction/NotifTable';
import {emailValidation,phoneValidation} from './InputTest';
import { createTask, deleteTask, updateTask, getTaskbyId } from './gqlFunction/OrderTaskTable';
import { createOrders, deleteOrders, updateOrders, getOrderbyIds } from './gqlFunction/OrderTable';

function App() {
  const createNotifData = {
    userNotificationsId:"xyz@gmail.com",
    NotificationStatus:'abc',
    NotificationContent:'hdzhzd',
    NotifyTime:'String'
  };

  const updateNotifData={
    NotificationStatus:'avail',
    id:"b9998afd-1850-4101-83c3-1ecb251f2330",
   
    _version:"1"
  }

  const deleteNotif={
    id:"3e2f5dbe-8f8d-4cb7-86b9-67356fed7da3",
    _version: "1"
  }
  const createUserData = {
    email: "xyzyz@gmail.com",
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
    email: "xbcd@gmail.com"
  }
  const getDataViaSuper = {
    superwiserEmail: "gourab@gmail.com"
  }
  const deleteEmail = {
    email: "niaz@gmail.com",
    _version: "1"
  }
  const deleteSuperMail = {
    email: "namrata@gmail.com",
    superwiserEmail: "gourab@gmail.com",
    _version: "1"
  }

  const updateTheUser = {
    email: "xyz@gmail.com",
    name: "anuj",
    isAdmin: true,
    _version: "9"
  }

  const testEmail = {
    email: "gshlga@gmail.com"
  }

  const createTaskData = {
    TaskID: 'neiloo',
    taskStatus: 'TASK_FORWARD',
    NodeID: 'adgffff',
    NextNodeName: ['aeaeasdf'],
    TaskAssignedTo: 'fgrag',
    isFirstUser: "true",
    TaskDescription: 'adfadf',
    UserFilePathList: ['asfgghj'],
    AssignedTimeStamp: 'String',
    TaskCompletionTime: 'String',
    DueDate: '1969-01-01Z'
  }

  const updateTaskData = {
    TaskID: 'asdfg',
    NextNodeName: ['asdf'],
    UserFilePathList: ['aghj'],
    TaskAssignedTo: 'lnvsln',
    _version: "1"


  }

  const deleteTaskData = {
    TaskID: 'asdfg',
    _version: "3"


  }

  const getTaskviaID = {
    TaskID: 'neiloo'
  }

  const createOrderData = {
  orderID: 'sjfGSzhaab',
  description: 'is fine',
  currentStatus: 'ORDER_CREATED',
  currentData: 'String!',
  currentTime: 'String!',
  createdDate: 'String!',
  WorkFlowJSON:"{\"hello\":20}",
  }

  const updateOrderData = {
    orderID: 'sjfaab',
    description: 'is not fine',
    _version: "1"


  }

  const deleteOrderData = {
    orderID: 'sjfaab',
    _version: "1"


  }

  const getOrderviaID = {
    orderID: 'sjfaab',
  }
  return (
    <div className="App">
      <h1>User table</h1>
      <button onClick={() => createNewUser(createUserData)}>Create new user</button><br/><br/>
      <button onClick={() => getUserByEmail(getDataViaMail.email)}>Get user by email</button><br/><br/>
      <button onClick={() => getUserBySupMail(getDataViaSuper.superwiserEmail)}>Get user by supermail</button><br/><br/>
      <button onClick={() => deleteUserByMail(deleteEmail)}>Delete by email</button><br/><br/>
      <button onClick={() => deleteUserBySupMail(deleteSuperMail.superwiserEmail)}>Delete by supermail</button><br/><br/>
      <button onClick={() => updateUserInfo(updateTheUser)}>Update User</button><br/><br/>

      <h1> Notif table</h1>
      <button onClick={() => createNewNotif(createNotifData)}>Create new notif</button><br/><br/>
      <button onClick={() => updateNotif(updateNotifData)}>Update notif </button><br/><br/>
      <button onClick={() => deleteNotifByMail(deleteNotif)}>Delete notif </button><br/><br/>

      <h1>validity checks</h1>
      <button onClick={() => emailValidation(testEmail.email)}>test mail </button><br/><br/>
      <button onClick={() => phoneValidation(createUserData.phone)}>test number </button><br/><br/>

      <h1>order task</h1>
      <button onClick={() => createTask(createTaskData)}>Create new Task</button><br/><br/>
      <button onClick={() => updateTask(updateTaskData)}>update new Task</button><br/><br/>
      <button onClick={() => deleteTask(deleteTaskData)}>delete new Task</button><br/><br/>
      <button onClick={() => getTaskbyId(getTaskviaID)}>get new Task</button><br/><br/>

      <h1>order table</h1>
      <button onClick={() => createOrders(createOrderData)}>Create new order</button><br/><br/>
      <button onClick={() => updateOrders(updateOrderData)}>update new order</button><br/><br/>
      <button onClick={() => deleteOrders(deleteOrderData)}>delete new order</button><br/><br/>
      <button onClick={() => getOrderbyIds(getOrderviaID)}>get order</button><br/><br/>



    </div>
  );
}

export default App;