import type { NextPage } from 'next';
import Head from 'next/head';
import NavigationBar from '../../components/NavigationBar';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Expense } from '../api/expenses';
import { useState } from 'react';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';
import { fetcher, getExpense } from '../../utils/expenses';
import LoadingIndicator from '../../components/LoadingIndicator';
import ErrorPanel from '../../components/ErrorPanel';

const AddExpense: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const title = 'Edit Expense';

    const { data, error, isValidating } = useSWR('/api/expenses/' + id, fetcher);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    if (error) {
        return <ErrorPanel />;
    }

    const onSave = (expense: Expense) => {
        setIsLoading(true);
        const request = new Request('/api/expenses/' + expense.id, {
            method: 'PUT',
            body: JSON.stringify(expense)
        });
        fetch(request).then(() => router.push('/expenses'));
    };

    const onDelete = (expenseId: string) => {
        setIsLoading(true);
        const request = new Request('/api/expenses/' + expenseId, {
            method: 'DELETE',
        });
        fetch(request).then(() => router.push('/expenses'));
    };

    return (
        <div>
            <Head>
                <title>{`TraXpenses - ${title}`}</title>
                <meta name="description" content="Track your daily expenses" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavigationBar />
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {title}
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    {(isValidating || isLoading || !data) ?
                        <LoadingIndicator /> :
                        <ExpenseForm
                            expense={getExpense(data)}
                            onSave={onSave}
                            onDelete={onDelete}
                        />
                    }
                </div>
            </main>
        </div>
    );
};

export default AddExpense;
