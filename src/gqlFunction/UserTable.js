
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries';
import {emailValidation,phoneValidation} from '../InputTest';

// email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn

// create instance of userDetails in App.js
 export const createNewUser = async (userDetails) => {
    if(userDetails.email=="" || userDetails.name=="" || typeof userDetails.isAdmin!= "boolean" || userDetails.phone=="" || userDetails.superwiserEmail=="" || typeof userDetails.isApproved!="boolean" || typeof userDetails.isEmailApproved!="boolean" || typeof userDetails.isPhoneVerified!="boolean" || typeof userDetails.isGooleSignIn!="boolean" || typeof userDetails.isFacebookSignIn!="boolean" || typeof userDetails.isGeneralAuthSignIn!="boolean"){
        throw new Error("null value not allowed")
        }
    emailValidation(userDetails.email)
    phoneValidation(userDetails.phone)
     try {
         const addUser = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
         console.log("User has been added", addUser.data.createUser);
     } catch (error) {
         console.log("error in creating ", error);
     }
 }

//create instance of Mail in App.js
export const deleteUserByMail = async (Mail) => {
    emailValidation(Mail.email)
    try {
        const deletedUser = await API.graphql({ query: mutations.deleteUser, variables: {input: Mail} })
        console.log("Deleted User is ", deletedUser.data.deleteUser);
    } catch (error) {
        console.log("Error in deleting ", error);
    }
}

//create instance of supEmail in App.js
export const deleteUserBySupMail = async (userSupEmail) => {
    emailValidation(userSupEmail.superwiserEmail)

    try {
        const userSupData = await API.graphql({ query: queries.userBySuperWisedID, variables: {superwiserEmail: userSupEmail } });
        console.log("User details by supervisor email", userSupData.data.userBySuperWisedID)
        const listItems = userSupData.data.userBySuperWisedID.items;
        console.log(listItems.length)
      for(var i=0 ; i<listItems.length ; i++)
      {
          console.log(i)
          console.log(listItems[i].email)
          const deleteList = {
              email: listItems[i].email,                  
              _version: listItems[i]._version
            }
          const deleteTheUser = await API.graphql({ query: mutations.deleteUser, variables: { input: deleteList} });
          console.log("Deleted User is ", deleteTheUser.data.deleteUser);
      }
     //   var len =  arrr.length;
        
    }
    catch (error){
        console.log("Error in getUser", error);
    }
}



export const getUserByEmail = async(userEmail) => {
    emailValidation(userEmail)

    try {
            const userData = await API.graphql({ query: queries.getUser, variables: {email: userEmail }});
            const x = userData.data.getUser;
            console.log(x)
            console.log("User details by email", userData.data.getUser)
    }
    catch {
           console.log("Error in getUser");
          }
}

// create instance of userSupEmail in App.js
      export const getUserBySupMail = async (userSupEmail) => {
        emailValidation(userSupEmail)

          try {
              const userSupData = await API.graphql({ query: queries.userBySuperWisedID, variables: {superwiserEmail: userSupEmail } });
              console.log("User details by supervisor email", userSupData.data.userBySuperWisedID)
          }
          catch (error){
              console.log("Error in getUser", error);
          }
      }

// create instance of updatedData in App.js
     export  const updateUserInfo = async(user)=>{
        emailValidation(user.email)
      try {
        console.log("Get user to update ")
          const getUpdateUser = await API.graphql({query:queries.getUser, variables:{email: user.email}})
          console.log("Get user to update ",getUpdateUser.data.getUser)
          const updatedUser=await API.graphql({query:mutations.updateUser,variables:{input: user}});
          console.log("Updated user is ",updatedUser.data.updateUser);
      }catch (error) {
          console.log("Error in updating ",error);
      }
  }



