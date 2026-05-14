# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*CurrentUserExpenses*](#currentuserexpenses)
  - [*UserCategories*](#usercategories)
- [**Mutations**](#mutations)
  - [*CreateExpense*](#createexpense)
  - [*UpdateCategory*](#updatecategory)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## CurrentUserExpenses
You can execute the `CurrentUserExpenses` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
currentUserExpenses(options?: ExecuteQueryOptions): QueryPromise<CurrentUserExpensesData, undefined>;

interface CurrentUserExpensesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<CurrentUserExpensesData, undefined>;
}
export const currentUserExpensesRef: CurrentUserExpensesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
currentUserExpenses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<CurrentUserExpensesData, undefined>;

interface CurrentUserExpensesRef {
  ...
  (dc: DataConnect): QueryRef<CurrentUserExpensesData, undefined>;
}
export const currentUserExpensesRef: CurrentUserExpensesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the currentUserExpensesRef:
```typescript
const name = currentUserExpensesRef.operationName;
console.log(name);
```

### Variables
The `CurrentUserExpenses` query has no variables.
### Return Type
Recall that executing the `CurrentUserExpenses` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CurrentUserExpensesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `CurrentUserExpenses`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, currentUserExpenses } from '@dataconnect/generated';


// Call the `currentUserExpenses()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await currentUserExpenses();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await currentUserExpenses(dataConnect);

console.log(data.expenses);

// Or, you can use the `Promise` API.
currentUserExpenses().then((response) => {
  const data = response.data;
  console.log(data.expenses);
});
```

### Using `CurrentUserExpenses`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, currentUserExpensesRef } from '@dataconnect/generated';


// Call the `currentUserExpensesRef()` function to get a reference to the query.
const ref = currentUserExpensesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = currentUserExpensesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.expenses);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.expenses);
});
```

## UserCategories
You can execute the `UserCategories` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
userCategories(options?: ExecuteQueryOptions): QueryPromise<UserCategoriesData, undefined>;

interface UserCategoriesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<UserCategoriesData, undefined>;
}
export const userCategoriesRef: UserCategoriesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
userCategories(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<UserCategoriesData, undefined>;

interface UserCategoriesRef {
  ...
  (dc: DataConnect): QueryRef<UserCategoriesData, undefined>;
}
export const userCategoriesRef: UserCategoriesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the userCategoriesRef:
```typescript
const name = userCategoriesRef.operationName;
console.log(name);
```

### Variables
The `UserCategories` query has no variables.
### Return Type
Recall that executing the `UserCategories` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UserCategoriesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UserCategoriesData {
  categories: ({
    id: UUIDString;
    name: string;
    description?: string | null;
  } & Category_Key)[];
}
```
### Using `UserCategories`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, userCategories } from '@dataconnect/generated';


// Call the `userCategories()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await userCategories();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await userCategories(dataConnect);

console.log(data.categories);

// Or, you can use the `Promise` API.
userCategories().then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

### Using `UserCategories`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, userCategoriesRef } from '@dataconnect/generated';


// Call the `userCategoriesRef()` function to get a reference to the query.
const ref = userCategoriesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = userCategoriesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.categories);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.categories);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateExpense
You can execute the `CreateExpense` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createExpense(vars: CreateExpenseVariables): MutationPromise<CreateExpenseData, CreateExpenseVariables>;

interface CreateExpenseRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExpenseVariables): MutationRef<CreateExpenseData, CreateExpenseVariables>;
}
export const createExpenseRef: CreateExpenseRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createExpense(dc: DataConnect, vars: CreateExpenseVariables): MutationPromise<CreateExpenseData, CreateExpenseVariables>;

interface CreateExpenseRef {
  ...
  (dc: DataConnect, vars: CreateExpenseVariables): MutationRef<CreateExpenseData, CreateExpenseVariables>;
}
export const createExpenseRef: CreateExpenseRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createExpenseRef:
```typescript
const name = createExpenseRef.operationName;
console.log(name);
```

### Variables
The `CreateExpense` mutation requires an argument of type `CreateExpenseVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateExpenseVariables {
  categoryId: UUIDString;
  amount: number;
  date: DateString;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateExpense` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateExpenseData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateExpenseData {
  expense_insert: Expense_Key;
}
```
### Using `CreateExpense`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createExpense, CreateExpenseVariables } from '@dataconnect/generated';

// The `CreateExpense` mutation requires an argument of type `CreateExpenseVariables`:
const createExpenseVars: CreateExpenseVariables = {
  categoryId: ..., 
  amount: ..., 
  date: ..., 
  description: ..., // optional
};

// Call the `createExpense()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createExpense(createExpenseVars);
// Variables can be defined inline as well.
const { data } = await createExpense({ categoryId: ..., amount: ..., date: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createExpense(dataConnect, createExpenseVars);

console.log(data.expense_insert);

// Or, you can use the `Promise` API.
createExpense(createExpenseVars).then((response) => {
  const data = response.data;
  console.log(data.expense_insert);
});
```

### Using `CreateExpense`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createExpenseRef, CreateExpenseVariables } from '@dataconnect/generated';

// The `CreateExpense` mutation requires an argument of type `CreateExpenseVariables`:
const createExpenseVars: CreateExpenseVariables = {
  categoryId: ..., 
  amount: ..., 
  date: ..., 
  description: ..., // optional
};

// Call the `createExpenseRef()` function to get a reference to the mutation.
const ref = createExpenseRef(createExpenseVars);
// Variables can be defined inline as well.
const ref = createExpenseRef({ categoryId: ..., amount: ..., date: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createExpenseRef(dataConnect, createExpenseVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.expense_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.expense_insert);
});
```

## UpdateCategory
You can execute the `UpdateCategory` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCategory(vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface UpdateCategoryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
}
export const updateCategoryRef: UpdateCategoryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCategory(dc: DataConnect, vars: UpdateCategoryVariables): MutationPromise<UpdateCategoryData, UpdateCategoryVariables>;

interface UpdateCategoryRef {
  ...
  (dc: DataConnect, vars: UpdateCategoryVariables): MutationRef<UpdateCategoryData, UpdateCategoryVariables>;
}
export const updateCategoryRef: UpdateCategoryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCategoryRef:
```typescript
const name = updateCategoryRef.operationName;
console.log(name);
```

### Variables
The `UpdateCategory` mutation requires an argument of type `UpdateCategoryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateCategoryVariables {
  id: UUIDString;
  name?: string | null;
  description?: string | null;
}
```
### Return Type
Recall that executing the `UpdateCategory` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCategoryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCategoryData {
  category_update?: Category_Key | null;
}
```
### Using `UpdateCategory`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCategory, UpdateCategoryVariables } from '@dataconnect/generated';

// The `UpdateCategory` mutation requires an argument of type `UpdateCategoryVariables`:
const updateCategoryVars: UpdateCategoryVariables = {
  id: ..., 
  name: ..., // optional
  description: ..., // optional
};

// Call the `updateCategory()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCategory(updateCategoryVars);
// Variables can be defined inline as well.
const { data } = await updateCategory({ id: ..., name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCategory(dataConnect, updateCategoryVars);

console.log(data.category_update);

// Or, you can use the `Promise` API.
updateCategory(updateCategoryVars).then((response) => {
  const data = response.data;
  console.log(data.category_update);
});
```

### Using `UpdateCategory`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCategoryRef, UpdateCategoryVariables } from '@dataconnect/generated';

// The `UpdateCategory` mutation requires an argument of type `UpdateCategoryVariables`:
const updateCategoryVars: UpdateCategoryVariables = {
  id: ..., 
  name: ..., // optional
  description: ..., // optional
};

// Call the `updateCategoryRef()` function to get a reference to the mutation.
const ref = updateCategoryRef(updateCategoryVars);
// Variables can be defined inline as well.
const ref = updateCategoryRef({ id: ..., name: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCategoryRef(dataConnect, updateCategoryVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.category_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.category_update);
});
```

