import { API } from 'aws-amplify';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
export const createTask = async (taskDetails) => {
    try {
        const addTask= await API.graphql({ query: mutations.createOrderTask, variables: { input: taskDetails } })
        console.log("Task has been added", addTask.data.createOrderTask);
    } catch (error) {
        console.log("error in creating ", error);
    }
}

export  const updateTask = async(user)=>{
    try {
      console.log("Get user to update ")
        const updatedTask=await API.graphql({query:mutations.updateOrderTask,variables:{input: user}});
        console.log("Updated Task is ",updatedTask.data.updateOrderTask);
    }catch (error) {
        console.log("Error in updating ",error);
    }
}

export const deleteTask = async (Mail) => {
    try {
        const deletedTask = await API.graphql({ query: mutations.deleteOrderTask, variables: {input: Mail} })
        console.log("Deleted Task is ", deletedTask.data.deleteOrderTask);
    } catch (error) {
        console.log("Error in deleting ", error);
    }
} 

export const getTaskbyId = async(userEmail) => {
    try {
            const getTask = await API.graphql({ query: queries.getOrderTask, variables: {TaskID: userEmail.TaskID }});
            console.log('Task to be read is', getTask.data.getOrderTask)
    }
    catch(error) {
           console.log("Error in gettask",error);
          }
}