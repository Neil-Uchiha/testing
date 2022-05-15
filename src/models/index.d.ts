import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CurrentStatusEnum {
  ORDER_CREATED = "ORDER_CREATED",
  ORDER_IN_PROGRESS = "ORDER_IN_PROGRESS",
  ORDER_CANCELLED = "ORDER_CANCELLED",
  ORDER_COMPLETED = "ORDER_COMPLETED"
}

export enum TaskStatusEnum {
  TASK_FORWARD = "TASK_FORWARD",
  TASK_CANCELLED = "TASK_CANCELLED",
  TASK_COMPLETED = "TASK_COMPLETED",
  TASK_IN_PROGRESS = "TASK_IN_PROGRESS",
  TASK_TO_START = "TASK_TO_START"
}



type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderTaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkflowMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkflowDefinitionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserNotificationsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserOrderMappingMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly isAdmin: boolean;
  readonly phone: string;
  readonly superwiserEmail: string;
  readonly isApproved: boolean;
  readonly isEmailApproved: boolean;
  readonly isPhoneVerified: boolean;
  readonly isGooleSignIn: boolean;
  readonly isFacebookSignIn: boolean;
  readonly isGeneralAuthSignIn: boolean;
  readonly orders?: (UserOrderMapping | null)[] | null;
  readonly notifications?: (UserNotifications | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Order {
  readonly id: string;
  readonly orderID: string;
  readonly description: string;
  readonly currentStatus: CurrentStatusEnum | keyof typeof CurrentStatusEnum;
  readonly currentData: string;
  readonly currentTime: string;
  readonly createdDate: string;
  readonly WorkFlowJSON: string;
  readonly tasks?: (OrderTask | null)[] | null;
  readonly users?: (UserOrderMapping | null)[] | null;
  readonly relatedWorkFlow?: Workflow | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class OrderTask {
  readonly id: string;
  readonly TaskID: string;
  readonly taskStatus: TaskStatusEnum | keyof typeof TaskStatusEnum;
  readonly NodeID: string;
  readonly NextNodeName: string[];
  readonly TaskAssignedTo: string;
  readonly isFirstUser: boolean;
  readonly TaskDescription: string;
  readonly UserFilePathList: string[];
  readonly AssignedTimeStamp: string;
  readonly TaskCompletionTime: string;
  readonly DueDate: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderTasksId?: string | null;
  constructor(init: ModelInit<OrderTask, OrderTaskMetaData>);
  static copyOf(source: OrderTask, mutator: (draft: MutableModel<OrderTask, OrderTaskMetaData>) => MutableModel<OrderTask, OrderTaskMetaData> | void): OrderTask;
}

export declare class Workflow {
  readonly id: string;
  readonly workflowName: string;
  readonly workflowOrders?: (Order | null)[] | null;
  readonly workflowdefinitions?: (WorkflowDefinition | null)[] | null;
  readonly WorkFlowJSON: string;
  readonly WorkFlowDescription: string;
  readonly CreatedBy: string;
  readonly OwnedBy: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Workflow, WorkflowMetaData>);
  static copyOf(source: Workflow, mutator: (draft: MutableModel<Workflow, WorkflowMetaData>) => MutableModel<Workflow, WorkflowMetaData> | void): Workflow;
}

export declare class WorkflowDefinition {
  readonly id: string;
  readonly workflowdefinitionid: string;
  readonly NodeName: string;
  readonly NextNodeName: string[];
  readonly Description: string;
  readonly WorkFlowName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly workflowWorkflowdefinitionsId?: string | null;
  constructor(init: ModelInit<WorkflowDefinition, WorkflowDefinitionMetaData>);
  static copyOf(source: WorkflowDefinition, mutator: (draft: MutableModel<WorkflowDefinition, WorkflowDefinitionMetaData>) => MutableModel<WorkflowDefinition, WorkflowDefinitionMetaData> | void): WorkflowDefinition;
}

export declare class UserNotifications {
  readonly id: string;
  readonly connectedUser?: User | null;
  readonly NotificationStatus: string;
  readonly NotificationContent: string;
  readonly NotifyTime: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserNotifications, UserNotificationsMetaData>);
  static copyOf(source: UserNotifications, mutator: (draft: MutableModel<UserNotifications, UserNotificationsMetaData>) => MutableModel<UserNotifications, UserNotificationsMetaData> | void): UserNotifications;
}

export declare class UserOrderMapping {
  readonly id: string;
  readonly user: User;
  readonly order: Order;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserOrderMapping, UserOrderMappingMetaData>);
  static copyOf(source: UserOrderMapping, mutator: (draft: MutableModel<UserOrderMapping, UserOrderMappingMetaData>) => MutableModel<UserOrderMapping, UserOrderMappingMetaData> | void): UserOrderMapping;
}