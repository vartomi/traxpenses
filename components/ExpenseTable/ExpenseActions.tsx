import Link from 'next/link';

interface ExpenseActionsProps {
    expenseId: number;
}

const ExpenseActions: React.FC<ExpenseActionsProps> = ({ expenseId }) => {
    return (
        <div>
            <Link href={`/expenses/${expenseId}`}>
                <a className="text-blue-900 hover:text-blue-800">
                    Edit
                </a>
            </Link>
        </div>
    );
};

export default ExpenseActions;