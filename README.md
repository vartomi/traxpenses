# traxpenses
PoC project with Next.js and TailwindCSS for daily expense tracking


## commands

- `npm run build` and `npm start` for building and using production version. It is required for the mocked API singleton instance, because in dev mode it is rebuild several times and drops the state from the memory.

- `npm test` runs jest unit tests, there is only one as a preparation for the utils, the project prepared for further tests, like snapshot and unit tests.

- `npm run cypress` for integration tests, there is one test for navigation behavior, it is prepared to create further end-to-end tests

- `npm run lint` for running ESLint and TSLint to ensure better and common code quality

## room for improvements

- sorting on server-side (render table on server-side) in case of huge amount of data
- filtering on server-side in case of huge amount of data
- additional validation, like date format, max character length, invalid date, invalid amount, etc.
- error panel usage for further cases when error can be happened
- sophisticated filtering with dropdowns, type specific controls
- adding a page to manage available category list
- more tests of course

## functionalites

### Landing page
Simple "marketing" landing page to start track your expenses.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/LandingPage.png)


### Add/Edit/Delete expense
There is simple validation for empty fields.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/EmptyFieldValidation.png)

Simple edit of an expense.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/EditExpense.png)

### Expenses table
List of the expenses, you can sort some columns (asc and desc), there is possibility to Edit expense, and also filtering with quick search.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/ExpenseTable.png)

Sorting by Amount column.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/SortDescAmountColumn.png)

Searc for EUR related expenses.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/QuickSearchFiltering.png)

After some expenses were deleted.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/DeleteSomeExpenses.png)

A new test expense added.

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/NewExpenseAdded.png)


### Error panel
There is a PoC for handling error like http 404 (e.g. /api/expenses/randomid)

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/ErrorPanel.png)

### Cypress test

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/CypressTests.png)

