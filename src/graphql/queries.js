/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($email: String!) {
    getUser(email: $email) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $email: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const userBySuperWisedID = /* GraphQL */ `
  query UserBySuperWisedID(
    $superwiserEmail: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userBySuperWisedID(
      superwiserEmail: $superwiserEmail
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($orderID: String!) {
    getOrder(orderID: $orderID) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $orderID: String
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      orderID: $orderID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrderTask = /* GraphQL */ `
  query GetOrderTask($TaskID: String!) {
    getOrderTask(TaskID: $TaskID) {
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
export const listOrderTasks = /* GraphQL */ `
  query ListOrderTasks(
    $TaskID: String
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrderTasks(
      TaskID: $TaskID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrderTasks = /* GraphQL */ `
  query SyncOrderTasks(
    $filter: ModelOrderTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrderTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkflow = /* GraphQL */ `
  query GetWorkflow($workflowName: String!) {
    getWorkflow(workflowName: $workflowName) {
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
export const listWorkflows = /* GraphQL */ `
  query ListWorkflows(
    $workflowName: String
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorkflows(
      workflowName: $workflowName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkflows = /* GraphQL */ `
  query SyncWorkflows(
    $filter: ModelWorkflowFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkflows(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWorkflowDefinition = /* GraphQL */ `
  query GetWorkflowDefinition($id: ID!) {
    getWorkflowDefinition(id: $id) {
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
export const listWorkflowDefinitions = /* GraphQL */ `
  query ListWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWorkflowDefinitions = /* GraphQL */ `
  query SyncWorkflowDefinitions(
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkflowDefinitions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const nodeByNodeandWorkFlowName = /* GraphQL */ `
  query NodeByNodeandWorkFlowName(
    $NodeName: String!
    $WorkFlowName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelWorkflowDefinitionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodeByNodeandWorkFlowName(
      NodeName: $NodeName
      WorkFlowName: $WorkFlowName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserNotifications = /* GraphQL */ `
  query GetUserNotifications($id: ID!) {
    getUserNotifications(id: $id) {
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
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserNotifications = /* GraphQL */ `
  query SyncUserNotifications(
    $filter: ModelUserNotificationsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUserOrderMapping = /* GraphQL */ `
  query GetUserOrderMapping($id: ID!) {
    getUserOrderMapping(id: $id) {
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
export const listUserOrderMappings = /* GraphQL */ `
  query ListUserOrderMappings(
    $filter: ModelUserOrderMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserOrderMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        orderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserOrderMappings = /* GraphQL */ `
  query SyncUserOrderMappings(
    $filter: ModelUserOrderMappingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserOrderMappings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userID
        orderID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
