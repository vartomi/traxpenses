import { Expense } from '../../pages/api/expenses';
import { columnDefinition } from './ExpensesTable';
import classNames from 'classnames';

interface ExpensesTableRowProps {
    rowData: Expense;
}

const ExpensesTablRow: React.FC<ExpensesTableRowProps> = ({rowData}) => {
    return (
        <tr>
            {
                columnDefinition.map(cd => {
                    const value = rowData[cd.id as keyof Expense];
                    return (
                        <td key={`cell-${cd.id}`} className={classNames('px-6 py-4 whitespace-nowrap', cd.className)}>
                            <div className="text-gray-900">
                                {cd.formatter?.(value) ?? value}
                            </div>
                        </td>
                    );
                })
            }
        </tr>
    );
};

export default ExpensesTablRow;