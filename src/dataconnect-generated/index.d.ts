import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Budget_Key {
  id: UUIDString;
  __typename?: 'Budget_Key';
}

export interface Category_Key {
  id: UUIDString;
  __typename?: 'Category_Key';
}

export interface CreateExpenseData {
  expense_insert: Expense_Key;
}

export interface CreateExpenseVariables {
  categoryId: UUIDString;
  amount: number;
  date: DateString;
  description?: string | null;
}

export interface CurrentUserExpensesData {
  expenses: ({
    id: UUIDString;
    amount: number;
    description?: string | null;
    date: DateString;
    category: {
      name: string;
    };
  } & Expense_Key)[];
}

export interface Expense_Key {
  id: UUIDString;
  __typename?: 'Expense_Key';
}

export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}

export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
}

export interface UserCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Category_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CurrentUserExpensesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<CurrentUserExpensesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<CurrentUserExpensesData, undefined>;
  operationName: string;
}
export const currentUserExpensesRef: CurrentUserExpensesRef;

export function currentUserExpenses(options?: ExecuteQueryOptions): QueryPromise<CurrentUserExpensesData, undefined>;
export function currentUserExpenses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<CurrentUserExpensesData, undefined>;

interface UserCategoriesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<UserCategoriesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<UserCategoriesData, undefined>;
  operationName: string;
}
export const userCategoriesRef: UserCategoriesRef;

export function userCategories(options?: ExecuteQueryOptions): QueryPromise<UserCategoriesData, undefined>;
export function userCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<UserCategoriesData, undefined>;

interface CreateExpenseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExpenseVariables): MutationRef<CreateExpenseData, CreateExpenseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateExpenseVariables): MutationRef<CreateExpenseData, CreateExpenseVariables>;
  operationName: string;
}
export const createExpenseRef: CreateExpenseRef;

export function createExpense(vars: CreateExpenseVariables): MutationPromise<CreateExpenseData, CreateExpenseVariables>;
export function createExpense(dc: DataConnect, vars: CreateExpenseVariables): MutationPromise<CreateExpenseData, CreateExpenseVariables>;

interface UpdateCategoryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
  operationName: string;
}
export const updateCategoryRef: UpdateCategoryRef;

export function updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;
export function updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

