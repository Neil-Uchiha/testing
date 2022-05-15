/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      isApproved
      isEmailApproved
      isPhoneVerified
      isGooleSignIn
      isFacebookSignIn
      isGeneralAuthSignIn
      orders {
        nextToken
        startedAt
      }
      notifications {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      isApproved
      isEmailApproved
      isPhoneVerified
      isGooleSignIn
      isFacebookSignIn
      isGeneralAuthSignIn
      orders {
        nextToken
        startedAt
      }
      notifications {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      email
      name
      isAdmin
      phone
      superwiserEmail
      isApproved
      isEmailApproved
      isPhoneVerified
      isGooleSignIn
      isFacebookSignIn
      isGeneralAuthSignIn
      orders {
        nextToken
        startedAt
      }
      notifications {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      orderID
      description
      currentStatus
      currentData
      currentTime
      createdDate
      WorkFlowJSON
      tasks {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        WorkFlowJSON
        WorkFlowDescription
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      orderID
      description
      currentStatus
      currentData
      currentTime
      createdDate
      WorkFlowJSON
      tasks {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        WorkFlowJSON
        WorkFlowDescription
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      orderID
      description
      currentStatus
      currentData
      currentTime
      createdDate
      WorkFlowJSON
      tasks {
        nextToken
        startedAt
      }
      users {
        nextToken
        startedAt
      }
      relatedWorkFlow {
        workflowName
        WorkFlowJSON
        WorkFlowDescription
        CreatedBy
        OwnedBy
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowOrdersId
    }
  }
`;
export const createOrderTask = /* GraphQL */ `
  mutation CreateOrderTask(
    $input: CreateOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    createOrderTask(input: $input, condition: $condition) {
      TaskID
      taskStatus
      NodeID
      NextNodeName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderTasksId
    }
  }
`;
export const updateOrderTask = /* GraphQL */ `
  mutation UpdateOrderTask(
    $input: UpdateOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    updateOrderTask(input: $input, condition: $condition) {
      TaskID
      taskStatus
      NodeID
      NextNodeName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderTasksId
    }
  }
`;
export const deleteOrderTask = /* GraphQL */ `
  mutation DeleteOrderTask(
    $input: DeleteOrderTaskInput!
    $condition: ModelOrderTaskConditionInput
  ) {
    deleteOrderTask(input: $input, condition: $condition) {
      TaskID
      taskStatus
      NodeID
      NextNodeName
      TaskAssignedTo
      isFirstUser
      TaskDescription
      UserFilePathList
      AssignedTimeStamp
      TaskCompletionTime
      DueDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderTasksId
    }
  }
`;
export const createWorkflow = /* GraphQL */ `
  mutation CreateWorkflow(
    $input: CreateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    createWorkflow(input: $input, condition: $condition) {
      workflowName
      workflowOrders {
        nextToken
        startedAt
      }
      workflowdefinitions {
        nextToken
        startedAt
      }
      WorkFlowJSON
      WorkFlowDescription
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateWorkflow = /* GraphQL */ `
  mutation UpdateWorkflow(
    $input: UpdateWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    updateWorkflow(input: $input, condition: $condition) {
      workflowName
      workflowOrders {
        nextToken
        startedAt
      }
      workflowdefinitions {
        nextToken
        startedAt
      }
      WorkFlowJSON
      WorkFlowDescription
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteWorkflow = /* GraphQL */ `
  mutation DeleteWorkflow(
    $input: DeleteWorkflowInput!
    $condition: ModelWorkflowConditionInput
  ) {
    deleteWorkflow(input: $input, condition: $condition) {
      workflowName
      workflowOrders {
        nextToken
        startedAt
      }
      workflowdefinitions {
        nextToken
        startedAt
      }
      WorkFlowJSON
      WorkFlowDescription
      CreatedBy
      OwnedBy
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createWorkflowDefinition = /* GraphQL */ `
  mutation CreateWorkflowDefinition(
    $input: CreateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    createWorkflowDefinition(input: $input, condition: $condition) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      WorkFlowName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
export const updateWorkflowDefinition = /* GraphQL */ `
  mutation UpdateWorkflowDefinition(
    $input: UpdateWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    updateWorkflowDefinition(input: $input, condition: $condition) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      WorkFlowName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
export const deleteWorkflowDefinition = /* GraphQL */ `
  mutation DeleteWorkflowDefinition(
    $input: DeleteWorkflowDefinitionInput!
    $condition: ModelWorkflowDefinitionConditionInput
  ) {
    deleteWorkflowDefinition(input: $input, condition: $condition) {
      workflowdefinitionid
      NodeName
      NextNodeName
      Description
      WorkFlowName
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      workflowWorkflowdefinitionsId
    }
  }
`;
export const createUserNotifications = /* GraphQL */ `
  mutation CreateUserNotifications(
    $input: CreateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    createUserNotifications(input: $input, condition: $condition) {
      connectedUser {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const updateUserNotifications = /* GraphQL */ `
  mutation UpdateUserNotifications(
    $input: UpdateUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    updateUserNotifications(input: $input, condition: $condition) {
      connectedUser {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const deleteUserNotifications = /* GraphQL */ `
  mutation DeleteUserNotifications(
    $input: DeleteUserNotificationsInput!
    $condition: ModelUserNotificationsConditionInput
  ) {
    deleteUserNotifications(input: $input, condition: $condition) {
      connectedUser {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      NotificationStatus
      NotificationContent
      NotifyTime
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userNotificationsId
    }
  }
`;
export const createUserOrderMapping = /* GraphQL */ `
  mutation CreateUserOrderMapping(
    $input: CreateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    createUserOrderMapping(input: $input, condition: $condition) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        orderID
        description
        currentStatus
        currentData
        currentTime
        createdDate
        WorkFlowJSON
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserOrderMapping = /* GraphQL */ `
  mutation UpdateUserOrderMapping(
    $input: UpdateUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    updateUserOrderMapping(input: $input, condition: $condition) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        orderID
        description
        currentStatus
        currentData
        currentTime
        createdDate
        WorkFlowJSON
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserOrderMapping = /* GraphQL */ `
  mutation DeleteUserOrderMapping(
    $input: DeleteUserOrderMappingInput!
    $condition: ModelUserOrderMappingConditionInput
  ) {
    deleteUserOrderMapping(input: $input, condition: $condition) {
      id
      userID
      orderID
      user {
        email
        name
        isAdmin
        phone
        superwiserEmail
        isApproved
        isEmailApproved
        isPhoneVerified
        isGooleSignIn
        isFacebookSignIn
        isGeneralAuthSignIn
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      order {
        orderID
        description
        currentStatus
        currentData
        currentTime
        createdDate
        WorkFlowJSON
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        workflowWorkflowOrdersId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
