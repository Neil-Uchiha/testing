
import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations'
import * as queries from '../graphql/queries';

// email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn

// create instance of userDetails in App.js
 export const createNewUser = async (userDetails) => {
     try {
         const addUser = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
         console.log("User has been added", addUser.data.createUser);
     } catch (error) {
         console.log("error in creating ", error);
     }
 }

//create instance of Mail in App.js
export const deleteUserByMail = async (Mail) => {
    try {
        const deletedUser = await API.graphql({ query: mutations.deleteUser, variables: {input: Mail} })
        console.log("Deleted User is ", deletedUser.data.deleteUser);
    } catch (error) {
        console.log("Error in deleting ", error);
    }
}

//create instance of supEmail in App.js
export const deleteUserBySupMail = async (supEmail) => {
    try {
        const supDel = await API.graphql({ query: queries.userBySuperWisedID, variables:{superwiserEmail: supEmail}});
        const y=supDel.data.userBySuperWisedID;
        /*const a=y.map(deleteUserByMail(email));
        console.log("deleted user is",a)*/
    //     const deleteTheUser = await API.graphql({ query: mutations.deleteUser, variables: { input: supEmail} });
    //  console.log("Deleted User is ", deleteTheUser.data.deleteUser);
         } catch (error) {
             console.log("Error in deleting ", error);
         }
      }


export const getUserByEmail = async(userEmail) => {
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





// create instance of userByEmail from userModel.js
// export const userByEmail = (email) => {
//     return {
//        email: email
//     }
// }









           
// export default function UserTable{

//      const [mail, setMail] = useState(null)
//      const [name, setName] = useState(null)
//      const [superviserMail, setSuperviserMail] = useState(null)
//      const [admin, setAdmin] = useState(false)
//     const [deletionMail,setDeletionMail]=useState(null);
//     const [updatedName,setUpdateName]=useState();

//     // const userDetails = {
//     //     email: "namrata21@gmail.com",
//     //     name: "Namrata",
//     //     isAdmin: false,
//     //     phone: "8888888888",
//     //     superwiserEmail: "gourab111@gmail.com",
//     //     isApproved: true,
//     //     isEmailApproved: true,
//     //     isPhoneVerified: true,
//     //     isGooleSignIn: true,
//     //     isFacebookSignIn: false,
//     //     isGeneralAuthSignIn: false
//     // };
//     // email, name, isAdmin, phone, superviserEmail, isApproved, isEmailApproved, isPhoneVerified, isGooleSignIn,isFacebookSignIn ,isGeneralAuthSignIn
//     const updatedData={
//         email: "namratasharma@gmail.com",
//         name: updatedName,
//         isAdmin: false,
//         phone: "8888888888",
//         superwiserEmail: "gourab@gmail.com",
//         isApproved: true,
//         isEmailApproved: true,
//         isPhoneVerified: true,
//         isGooleSignIn: true,
//         isFacebookSignIn: false,
//         isGeneralAuthSignIn: false
//     }

//     async function createNewUser(userDetails){
//         try {
//             const createUserData = await API.graphql({ query: mutations.createUser, variables: { input: userDetails } })
//             console.log("Response is ", createUserData.data.createUser);
//         } catch (error) {
//             console.log("error is ", error);
//         }
//     }
 

//      const deleteByEmail = {
//          email: deletionMail
//      }

   



//     return (
//         <div>
//             <button onClick={() => createNewUser()}>Create New Row</button><br/><br/>
//             <input type='text' placeholder='Enter Email for getUser by email' onChange={(supermail)=>setMail(supermail.target.value)}/>
//             <button onClick={() => getUserByEmail()}>Get Data by Email</button><br/><br/> 
//             <input type='text' placeholder='Enter Email for getUser by supervisor email' onChange={(supermail)=>setMail(supermail.target.value)} />
//             <button onClick={() => getUserBySupMail()}>Get Data by Supervisor Email</button><br/><br/>
//             <input type='text' placeholder='Enter Email for deleting the user' onChange={(deletionMail)=>setDeletionMail(deletionMail.target.value)} />
//             <button onClick={()=>deleteTheUser()}>Delete user</button><br/><br/>
//             <input type='text' placeholder='Enter Email for updating the user' onChange={(mail)=>setMail(mail.target.value)} />
//             <input type='text' placeholder='Enter updated name' onChange={(updatedName)=>setUpdateName(updatedName.target.value)} />
//             <button onClick={()=>updateUser()}>Update user</button>
//         </div>
//     )
// }

