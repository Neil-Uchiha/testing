import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
export const createOrders = async (taskDetails) => {
    if(taskDetails.orderID=="" || taskDetails.description=="" || taskDetails.currentStatus=="" || taskDetails.currentData=="" || taskDetails.currentTime=="" || taskDetails.createdDate=="" || taskDetails.WorkFlowJSON==""){
        throw new Error("null value not allowed")
    }
    try {
        const addOrder= await API.graphql({ query: mutations.createOrder, variables: { input: taskDetails } })
        console.log("Order has been added", addOrder.data.createOrder);
    } catch (error) {
        console.log("error in creating ", error);
    }
}

export  const updateOrders = async(user)=>{
    if(user.orderID==""){
        throw new Error("null value not allowed for orderID")
    }

    try {
      console.log("Get user to update ")
        const updatedOrder=await API.graphql({query:mutations.updateOrder,variables:{input: user}});
        console.log("Updated Order is ",updatedOrder.data.updateOrder);
    }catch (error) {
        console.log("Error in updating ",error);
    }
}

export const deleteOrders = async (Mail) => {
    if(Mail.orderID==""){
        throw new Error("null value not allowed for orderID")
    }
    try {
        const deletedOrder= await API.graphql({ query: mutations.deleteOrder, variables: {input: Mail} })
        console.log("Deleted Order is ", deletedOrder.data.deleteOrder);
    } catch (error) {
        console.log("Error in deleting ", error);
    }
} 

export const getOrderbyIds = async(userEmail) => {
    if(userEmail.orderID==""){
        throw new Error("null value not allowed for orderID")
    }
    try {
            const getsOrder = await API.graphql({ query: queries.getOrder, variables: {orderID: userEmail.orderID }});
            console.log('Order to be read is', getsOrder.data.getOrder)
    }
    catch(error) {
           console.log("Error in gettask",error);
          }
}