# traxpenses
PoC project with Next.js and TailwindCSS for daily expense tracking


## commands

- `npm run build` and `npm start` for building and using production version. It is required for the mocked API singleton instance, because in dev mode it is rebuild several times and drops the state from the memory.

- `npm test` runs jest unit tests, there is only one as a preparation for the utils, the project prepared for further tests, like snapshot and unit tests.

- `npm run cypress` for integration tests, there is one test for navigation behavior, it is prepared to create further end-to-end tests

- `npm run lint` for running ESLint and TSLint to ensure better and common code quality

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

![landing page](https://github.com/vartomi/traxpenses/blob/main/wiki/EmptyFieldValidation.png)


- Expenses table

- Sorting

- Quick search (filtering)


