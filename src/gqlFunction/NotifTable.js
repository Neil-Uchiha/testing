import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import {emailValidation,phoneValidation} from '../InputTest';

export const createNewNotif = async (notifDetails) => {
    if(notifDetails.userNotificationsId=="" || notifDetails.NotificationStatus=="" || notifDetails.NotificationContent=="" || notifDetails.NotifyTime==""){
        throw new Error("null value not allowed")
        }
    emailValidation(notifDetails.userNotificationsId)
    try {
        const addNotif = await API.graphql({ query: mutations.createUserNotifications, variables: { input: notifDetails } })
        console.log("Notif has been added", addNotif.data.createUserNotifications);
    } catch (error) {
        console.log("error in creating ", error);
    }
}

export  const updateNotif = async(user)=>{
    if(user.id==""){
        throw new Error("notif id can't be null")
    }
    try {
      console.log("Get user to update ")
        const updatedNotif=await API.graphql({query:mutations.updateUserNotifications,variables:{input: user}});
        console.log("Updated Notif is ",updatedNotif.data.updateUserNotifications);
    }catch (error) {
        console.log("Error in updating ",error);
    }
}

export const deleteNotifByMail = async (Mail) => {
    if(Mail.id==""){
        throw new Error("notif id can't be null")
    }
    try {
        const deletedNotif = await API.graphql({ query: mutations.deleteUserNotifications, variables: {input: Mail} })
        console.log("Deleted Notif is ", deletedNotif.data.deleteUserNotifications);
    } catch (error) {
        console.log("Error in deleting ", error);
    }
}