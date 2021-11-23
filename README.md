# traxpenses
PoC project with Next.js and TailwindCSS for daily expense tracking


## commands

- `npm run build` and `npm start` for building and using production version. It is required for the mocked API singleton instance, because in dev mode it is rebuild several times and drops the state from the memory.

- `npm test` runs jest unit tests, there is only one as a preparation for the utils, the project prepared for further tests, like snapshot and unit tests.

- `npm run cypress` for integration tests, there is one test for navigation behavior, it is prepared to create further end-to-end tests

- `npm run lint` for running ESLint and TSLint to ensure better and common code quality

## functionalites

- Landing page

- Add expense

- Edit/Delete expense

- Expenses table

- Sorting

- Quick search (filtering)


