# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { currentUserExpenses, userCategories, createExpense, updateCategory } from '@dataconnect/generated';


// Operation CurrentUserExpenses: 
const { data } = await CurrentUserExpenses(dataConnect);

// Operation UserCategories: 
const { data } = await UserCategories(dataConnect);

// Operation CreateExpense:  For variables, look at type CreateExpenseVars in ../index.d.ts
const { data } = await CreateExpense(dataConnect, createExpenseVars);

// Operation UpdateCategory:  For variables, look at type UpdateCategoryVars in ../index.d.ts
const { data } = await UpdateCategory(dataConnect, updateCategoryVars);


```