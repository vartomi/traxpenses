import { CategoryType } from '../../pages/api/expenses';
import styles from './ExpenseCategory.module.css';

export const mapCategoryToColor = {
    [CategoryType.Electronics]: 'bg-green-600',
    [CategoryType.Food]: 'bg-indigo-600',
    [CategoryType.Travel]: 'bg-pink-600',
    [CategoryType.Other]: 'bg-gray-600'
};

interface ExpenseCategoryProps {
    type: CategoryType;
}

const ExpenseCategory: React.FC<ExpenseCategoryProps> = ({ type }) => {
    return (
        <span className={`${styles.categoryType} ${mapCategoryToColor[type]}`}>
            {type}
        </span>
    );
};

export default ExpenseCategory;