import { ColumnDefinition } from './ExpensesTable';
import SortingIndicator, { Sort } from './SortingIndicator';
import styles from './ExpenseTableHeaderCell.module.css';
import classNames from 'classnames';

interface ExpenseTableHeaderCellProps {
    columnDefinition: ColumnDefinition;
    sortBy: string;
    sortDirection: Sort;
    changeSorting: (id: string) => void;
}

const ExpenseTableHeaderCell: React.FC<ExpenseTableHeaderCellProps> = ({
    columnDefinition,
    sortBy,
    sortDirection,
    changeSorting
}) => {
    const isSortable = columnDefinition.comparator;
    return (
        <th
            className={classNames(styles.headerCell, { ['cursor-pointer']: isSortable }, columnDefinition.className)}
            onClick={() => isSortable && changeSorting(columnDefinition.id)}
        >
            {columnDefinition.title}
            {columnDefinition.id === sortBy &&
                <SortingIndicator direction={sortDirection} />
            }
        </th>
    );
};

export default ExpenseTableHeaderCell;