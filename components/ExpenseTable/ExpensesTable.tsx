import ExpensesTablRow from './ExpensesTableRow';
import { CategoryType, Expense } from '../../pages/api/expenses';
import moment, { Moment } from 'moment';
import ExpenseCategory from './ExpenseCategory';
import ExpenseActions from './ExpenseActions';
import { DefaultDateTimeFormat } from '../../pages/api/expenses/mock';
import { useState } from 'react';
import { Sort } from './SortingIndicator';
import ExpenseTableHeaderCell from './ExpenseTableHeaderCell';
import QuickSearch from './QuickSearch';

const dateFormatter = (date: Moment) => moment(date).format(DefaultDateTimeFormat);
const numberFormatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 });
const amountFormatter = (amount: number) => numberFormatter.format(amount);
const categoryFormatter = (type: CategoryType) => <ExpenseCategory type={type} />;
const actionFormatter = (id: number) => <ExpenseActions expenseId={id} />;

const dateComparator = (date1: Moment, date2: Moment) => date1.unix() - date2.unix();
const amountComparator = (amount1: number, amount2: number) => amount1 - amount2;

export interface ColumnDefinition {
    id: string;
    title: string;
    formatter?: (value: any) => React.ReactElement | string;
    comparator?: (value1: any, value2: any) => number;
    className?: string;
}

export const columnDefinition: ColumnDefinition[] = [
    { id: 'transactionDate', title: 'Transaction Date', formatter: dateFormatter, comparator: dateComparator },
    { id: 'recipient', title: 'Recipient' },
    { id: 'currency', title: 'Currency' },
    {
        id: 'amount',
        title: 'Amount',
        formatter: amountFormatter,
        comparator: amountComparator,
        className: 'text-right'
    },
    { id: 'type', title: 'Category', formatter: categoryFormatter },
    { id: 'id', title: '', formatter: actionFormatter }
];



interface ExpensesTableProps {
    expenses: Expense[];
}

const ExpensesTable: React.FC<ExpensesTableProps> = ({ expenses }) => {
    const [sortBy, setSortBy] = useState('transactionDate');
    const [sortDirection, setSortDirection] = useState<Sort>(Sort.Asc);
    const [quickSearchText, setQuickSearchText] = useState('');
    let tableData = [...expenses];

    if (quickSearchText?.length > 2) {
        tableData = tableData.filter(exp => {
            const values = Object.values(exp).map(String).join(' ');
            return values.toLowerCase().includes(quickSearchText.toLowerCase());
        });
    }

    const sortingColumn = columnDefinition.find(cd => cd.id === sortBy);
    tableData = tableData.sort((exp1, exp2) => {
        const value1 = exp1[sortBy as keyof Expense];
        const value2 = exp2[sortBy as keyof Expense];
        return sortDirection * (sortingColumn?.comparator?.(value1, value2) ?? 0);
    });

    const changeSorting = (id: string) => {
        if (sortBy === id) {
            setSortDirection(sortDirection * -1);
        } else {
            setSortDirection(Sort.Asc);
            setSortBy(id);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <QuickSearch
                        className="mb-4 max-w-md"
                        onChange={setQuickSearchText}
                    />
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    {
                                        columnDefinition.map(cd => {
                                            return <ExpenseTableHeaderCell
                                                key={`header-${cd.id}`}
                                                columnDefinition={cd}
                                                sortBy={sortBy}
                                                sortDirection={sortDirection}
                                                changeSorting={changeSorting}
                                            />;
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tableData.map((rd: Expense, idx: number) =>
                                    <ExpensesTablRow key={`row-${idx}`} rowData={rd} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpensesTable;